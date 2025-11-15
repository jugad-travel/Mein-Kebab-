import type { Metadata } from "next";
import { AvisContent } from "./AvisContent";
import { infos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Avis clients",
  description: `Découvrez les avis de nos clients. ${infos.rating}/5 étoiles avec ${infos.reviews_count} avis.`,
};

export default function AvisPage() {
  return <AvisContent />;
}
