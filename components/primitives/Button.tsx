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
  target?: string;
  rel?: string;
}

const variantClasses = {
  primary: "bg-rouge-broche text-blanc-pur hover:bg-rouge-broche-hover",
  secondary: "bg-gris-ardoise text-blanc-pur hover:bg-gris-ardoise-light",
  outline: "border-2 border-rouge-broche text-rouge-broche hover:bg-rouge-broche hover:text-blanc-pur",
};

const sizeClasses = {
  sm: "py-3 text-sm min-h-[44px] button-padding-sm",
  md: "py-4 text-base min-h-[48px] button-padding-md",
  lg: "py-5 text-lg min-h-[56px] button-padding-lg",
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
  target,
  rel,
}: ButtonProps) {
  const props = href ? { href, target, rel } : { onClick, type };
  
  return (
    <Component
      {...props}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 sm:gap-2 rounded-2xl sm:rounded-14 font-bold uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-rouge-broche focus-visible:outline-offset-2",
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
