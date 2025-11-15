import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl", "px-6 md:px-8 lg:px-12 xl:px-16", className)} style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {children}
    </div>
  );
}
