import type { Metadata } from "next";
import { MenuGrid } from "@/components/MenuGrid";
import { Section } from "@/components/Section";
import { infos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description: `Découvrez notre menu complet : sandwichs, bowls, salades, extras, sauces, boissons et menus. ${infos.slogan}`,
  openGraph: {
    title: `Menu | ${infos.name}`,
    description: `Découvrez notre menu complet : sandwichs, bowls, salades, extras, sauces, boissons et menus.`,
  },
};

export default function MenuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `Menu ${infos.name}`,
    description: "Menu complet du restaurant",
    provider: {
      "@type": "Restaurant",
      name: infos.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section
        id="menu-page"
        title="Notre menu"
        subtitle="Découvrez nos spécialités et nos produits"
        className="min-h-screen bg-noir-charbon pt-8"
      >
        <MenuGrid />
      </Section>
    </>
  );
}

