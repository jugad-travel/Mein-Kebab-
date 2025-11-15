import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl", "px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20", className)} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      {children}
    </div>
  );
}
