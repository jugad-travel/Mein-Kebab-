import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

const variantClasses = {
  default: "bg-gris-ardoise text-blanc-pur/80",
  primary: "bg-rouge-broche text-blanc-pur",
  success: "bg-jaune-epices text-noir-charbon",
  warning: "bg-rouge-broche/20 text-rouge-broche",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

