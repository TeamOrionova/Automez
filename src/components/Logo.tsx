/**
 * automaez Logo Component
 * Brutalist design with bold typography and tactile shadows
 */

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "default" | "icon" | "wordmark";
}

export function Logo({ className = "", size = "md", variant = "default" }: LogoProps) {
    const sizes = {
        sm: "h-8",
        md: "h-12",
        lg: "h-16",
        xl: "h-24"
    };

    if (variant === "icon") {
        return (
            <svg 
                className={`${sizes[size]} w-auto ${className}`}
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Brutalist "A" icon */}
                <rect x="10" y="10" width="80" height="80" fill="#0a0a0a" stroke="#0a0a0a" strokeWidth="4"/>
                <rect x="14" y="14" width="72" height="72" fill="#f4f4f2"/>
                
                {/* Letter A */}
                <path 
                    d="M 35 70 L 45 35 L 55 35 L 65 70 M 42 55 L 58 55" 
                    stroke="#0a0a0a" 
                    strokeWidth="6" 
                    strokeLinecap="square"
                    fill="none"
                />
                
                {/* Shadow effect */}
                <rect x="14" y="86" width="72" height="4" fill="#0a0a0a" opacity="0.3"/>
                <rect x="86" y="14" width="4" height="72" fill="#0a0a0a" opacity="0.3"/>
            </svg>
        );
    }

    if (variant === "wordmark") {
        return (
            <svg 
                className={`${sizes[size]} w-auto ${className}`}
                viewBox="0 0 400 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background rectangle with shadow */}
                <rect x="0" y="0" width="400" height="100" fill="#0a0a0a"/>
                <rect x="4" y="4" width="392" height="92" fill="#f4f4f2"/>
                
                {/* "automaez" text */}
                <text 
                    x="200" 
                    y="65" 
                    fontFamily="system-ui, -apple-system, sans-serif" 
                    fontSize="48" 
                    fontWeight="900" 
                    fill="#0a0a0a" 
                    textAnchor="middle"
                    letterSpacing="-2"
                >
                    automaez
                </text>
                
                {/* Tactile shadow */}
                <rect x="4" y="96" width="392" height="4" fill="#0a0a0a" opacity="0.4"/>
                <rect x="396" y="4" width="4" height="92" fill="#0a0a0a" opacity="0.4"/>
            </svg>
        );
    }

    // Default: Icon + Text
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <svg 
                className={sizes[size]}
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="10" y="10" width="80" height="80" fill="#0a0a0a" stroke="#0a0a0a" strokeWidth="4"/>
                <rect x="14" y="14" width="72" height="72" fill="#f4f4f2"/>
                <path 
                    d="M 35 70 L 45 35 L 55 35 L 65 70 M 42 55 L 58 55" 
                    stroke="#0a0a0a" 
                    strokeWidth="6" 
                    strokeLinecap="square"
                    fill="none"
                />
                <rect x="14" y="86" width="72" height="4" fill="#0a0a0a" opacity="0.3"/>
                <rect x="86" y="14" width="4" height="72" fill="#0a0a0a" opacity="0.3"/>
            </svg>
            <span className="text-2xl font-black tracking-tighter uppercase">automaez</span>
        </div>
    );
}
