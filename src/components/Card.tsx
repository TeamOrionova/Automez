"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, x: -4, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            className={cn(
                "border-2 border-foreground bg-background p-6 transition-all duration-150",
                "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
