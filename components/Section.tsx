import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={cn("w-full", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {title && (
          <h1 className="mb-8 sm:mb-12 font-display text-3xl sm:text-4xl lg:text-5xl text-blanc-pur">
            {title}
          </h1>
        )}
        {children}
      </div>
    </section>
  );
}

