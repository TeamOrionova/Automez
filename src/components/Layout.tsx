import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-12", className)}>
            {children}
        </div>
    );
}

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section id={id} className={cn("py-12 sm:py-16 md:py-20 lg:py-32", className)}>
            {children}
        </section>
    );
}
