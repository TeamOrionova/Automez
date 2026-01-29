"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export function Button({
    children,
    onClick,
    className,
    variant = "primary",
    disabled,
    type = "button"
}: ButtonProps) {
    return (
        <motion.button
            whileHover={!disabled ? { y: -2, x: -2 } : {}}
            whileTap={!disabled ? { y: 2, x: 2, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" } : {}}
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={cn(
                "relative border-2 border-foreground bg-background px-8 py-4 font-bold uppercase tracking-tighter transition-colors duration-75",
                "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                variant === "secondary" && "bg-foreground text-background",
                disabled && "opacity-50 cursor-not-allowed grayscale",
                className
            )}
        >
            {children}
        </motion.button>
    );
}
