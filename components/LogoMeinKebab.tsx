"use client";

import React from "react";

export function LogoMeinKebab({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-label="Mein Kebab Logo"
      role="img"
    >
      {/* Cercle extérieur */}
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      
      {/* Broche rouge (kebab skewer) */}
      <g transform="translate(100, 50)">
        {/* Crochet en haut */}
        <path
          d="M -8 -15 L -8 -20 L 8 -20 L 8 -15"
          fill="#D2483A"
          stroke="#D2483A"
          strokeWidth="1"
        />
        {/* Tige verticale */}
        <rect x="-2" y="-15" width="4" height="80" fill="#D2483A" />
        {/* Viande en forme conique */}
        <path
          d="M -15 0 Q 0 20, 15 0 L 15 50 Q 0 70, -15 50 Z"
          fill="#D2483A"
        />
      </g>
      
      {/* Texte "MEIN BERLINER" */}
      <text
        x="100"
        y="120"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="18"
        fontFamily="Bebas Neue, sans-serif"
        fontWeight="400"
        letterSpacing="2"
      >
        MEIN BERLINER
      </text>
      
      {/* Texte "DÖNER KEBAB" en rouge */}
      <text
        x="100"
        y="145"
        textAnchor="middle"
        fill="#D2483A"
        fontSize="16"
        fontFamily="Bebas Neue, sans-serif"
        fontWeight="400"
        letterSpacing="1"
      >
        –DÖNER KEBAB–
      </text>
    </svg>
  );
}

