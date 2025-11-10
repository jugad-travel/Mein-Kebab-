import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn("py-16 md:py-24", className)}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2
                id={title ? `${id}-title` : undefined}
                className="mb-4 font-display text-4xl font-normal text-blanc-pur sm:text-5xl md:text-6xl"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-2xl text-lg text-blanc-pur/80">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </Component>
  );
}

