import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mein Berliner - Le vrai Gemüse Kebap de Berlin, à Lille",
    short_name: "Mein Berliner",
    description: "Le vrai Gemüse Kebap de Berlin, à Lille. Broche maison, légumes grillés frais, sauces onctueuses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0D",
    theme_color: "#D2483A",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

