import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import projects data
const projectsPath = path.join(__dirname, '../src/data/projects.ts');
const projectsContent = fs.readFileSync(projectsPath, 'utf-8');

// Extract project data (simple parsing - assumes PROJECTS array format)
const projectsMatch = projectsContent.match(/export const PROJECTS.*?=\s*\[([\s\S]*?)\];/);
if (!projectsMatch) {
    console.error('Could not find PROJECTS array in projects.ts');
    process.exit(1);
}

// Parse projects to get slug and link
const projects = [];
const projectBlocks = projectsMatch[1].split(/},\s*{/);

projectBlocks.forEach(block => {
    const slugMatch = block.match(/slug:\s*["']([^"']+)["']/);
    const linkMatch = block.match(/link:\s*["']([^"']+)["']/);
    
    if (slugMatch && linkMatch) {
        projects.push({
            slug: slugMatch[1],
            link: linkMatch[1]
        });
    }
});

console.log(`Found ${projects.length} projects\n`);

const publicDir = path.join(__dirname, '../public/projects');

// Ensure public/projects directory exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('Created public/projects directory\n');
}

// Process each project
async function generateScreenshots() {
    let generated = 0;
    let skipped = 0;
    let failed = 0;

    console.log('Launching browser...\n');
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const project of projects) {
        const filename = `${project.slug}.png`;
        const filepath = path.join(publicDir, filename);

        // Check if screenshot already exists
        if (fs.existsSync(filepath)) {
            console.log(`✓ ${filename} - already exists (skipped)`);
            skipped++;
            continue;
        }

        // Generate screenshot
        console.log(`⏳ ${filename} - generating from ${project.link}...`);
        
        try {
            const page = await browser.newPage();
            await page.setViewport({ width: 1200, height: 800 });
            
            // Navigate to the page with timeout
            await page.goto(project.link, { 
                waitUntil: 'networkidle2',
                timeout: 30000 
            });
            
            // Wait a bit for any animations to complete
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Take screenshot
            await page.screenshot({ 
                path: filepath,
                type: 'png'
            });
            
            await page.close();
            
            console.log(`✓ ${filename} - generated successfully`);
            generated++;
            
        } catch (error) {
            console.error(`✗ ${filename} - failed: ${error.message}`);
            failed++;
        }
    }

    await browser.close();

    console.log('\n' + '='.repeat(50));
    console.log('Screenshot Generation Complete');
    console.log('='.repeat(50));
    console.log(`Generated: ${generated}`);
    console.log(`Skipped: ${skipped}`);
    console.log(`Failed: ${failed}`);
    console.log(`Total: ${projects.length}`);
}

// Run the script
generateScreenshots().catch(console.error);
