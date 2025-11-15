import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const variantClasses = {
  primary: "bg-rouge-broche text-blanc-pur hover:bg-rouge-broche-hover",
  secondary: "bg-gris-ardoise text-blanc-pur hover:bg-gris-ardoise-light",
  outline: "border-2 border-rouge-broche text-rouge-broche hover:bg-rouge-broche hover:text-blanc-pur",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  as: Component = "button",
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  disabled,
}: ButtonProps) {
  const props = href ? { href } : { onClick, type };
  
  return (
    <Component
      {...props}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-14 font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-2 focus-visible:outline-rouge-broche focus-visible:outline-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {children}
    </Component>
  );
}
