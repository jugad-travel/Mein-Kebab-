import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-14 bg-gris-ardoise/20 border border-gris-ardoise/30 p-8 md:p-10 transition-all duration-300",
        hover && "hover:border-rouge-broche/50 hover:shadow-xl hover:shadow-rouge-broche/20 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
