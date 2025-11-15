"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMeinKebab({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex-shrink-0", className)}>
      <img
        src="/images/logo/kebab mein kebab .jpg"
        alt="Mein Berliner Logo"
        className={cn("h-full w-full object-contain", className)}
      />
    </div>
  );
}

