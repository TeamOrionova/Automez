import { Metadata } from "next";
import { PROJECTS } from "@/data/projects";

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found | automaez",
        };
    }

    return {
        title: `${project.title} - ${project.category} | automaez`,
        description: project.tagline,
    };
}

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
