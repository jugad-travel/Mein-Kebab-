import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light";
}

export function Section({
  id,
  children,
  className,
  variant = "dark",
}: SectionProps) {
  const variantClasses = {
    dark: "bg-noir-charbon",
    light: "bg-gris-ardoise/30",
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full py-24 md:py-32 lg:py-40",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </section>
  );
}
