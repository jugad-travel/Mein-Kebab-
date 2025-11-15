import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design Tokens - Espacements (base 4px)
      spacing: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
        "64": "64px",
        "80": "80px",
        "96": "96px",
        "128": "128px",
        "160": "160px",
        "192": "192px",
        "224": "224px",
        "256": "256px",
        "320": "320px",
      },
      // Design Tokens - Radius
      borderRadius: {
        "14": "14px",
        "DEFAULT": "14px",
      },
      // Design Tokens - Ombres
      boxShadow: {
        "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "DEFAULT": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "glow-red": "0 0 20px rgba(210, 72, 58, 0.3)",
        "glow-red-lg": "0 0 40px rgba(210, 72, 58, 0.4)",
      },
      // Design Tokens - Couleurs (conservées)
      colors: {
        "noir-charbon": "#0B0B0D",
        "blanc-pur": "#FFFFFF",
        "rouge-broche": "#D2483A",
        "rouge-broche-hover": "#B73A2E",
        "rouge-broche-light": "#E85A4A",
        "gris-ardoise": "#1F2329",
        "gris-ardoise-light": "#2A2F37",
        "jaune-epices": "#F2B705",
        "jaune-epices-light": "#FFC926",
      },
      // Design Tokens - Typographie
      fontSize: {
        "xs": ["12px", { lineHeight: "1.5" }],
        "sm": ["14px", { lineHeight: "1.5" }],
        "base": ["16px", { lineHeight: "1.6" }],
        "lg": ["18px", { lineHeight: "1.6" }],
        "xl": ["20px", { lineHeight: "1.5" }],
        "2xl": ["24px", { lineHeight: "1.4" }],
        "3xl": ["30px", { lineHeight: "1.3" }],
        "4xl": ["36px", { lineHeight: "1.2" }],
        "5xl": ["48px", { lineHeight: "1.1" }],
        "6xl": ["60px", { lineHeight: "1.1" }],
        "7xl": ["72px", { lineHeight: "1" }],
        "8xl": ["96px", { lineHeight: "1" }],
      },
      // Design Tokens - Grille 12 colonnes
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;

