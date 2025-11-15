import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

const sizeClasses = {
  1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  3: "text-2xl sm:text-3xl md:text-4xl",
  4: "text-xl sm:text-2xl md:text-3xl",
  5: "text-lg sm:text-xl md:text-2xl",
  6: "text-base sm:text-lg md:text-xl",
};

export function Heading({ level = 2, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={cn(
        "font-display font-black uppercase leading-tight",
        sizeClasses[level],
        className
      )}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {children}
    </Tag>
  );
}
