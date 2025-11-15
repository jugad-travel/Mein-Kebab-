import type { Metadata } from "next";
import { MenuGrid } from "@/components/MenuGrid";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
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
      <Section id="menu-page" variant="dark" className="!pt-8 md:!pt-12">
        <Container>
          <div className="mb-8 sm:mb-16 text-center">
            <Heading level={2} className="mb-2 sm:mb-4">Notre menu</Heading>
            <p className="text-base sm:text-xl text-blanc-pur/80">Découvrez nos spécialités et nos produits</p>
          </div>
          <MenuGrid />
        </Container>
      </Section>
    </>
  );
}
