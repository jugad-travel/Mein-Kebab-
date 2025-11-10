import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { infos } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meinkebab.fr"),
  title: {
    default: `${infos.name} - ${infos.slogan}`,
    template: `%s | ${infos.name}`,
  },
  description: `${infos.slogan}. Broche maison, légumes grillés frais, sauces onctueuses. Sur place, à emporter, terrasse.`,
  keywords: ["kebab", "berlin", "lille", "gemüse kebap", "restaurant", "street food"],
  authors: [{ name: infos.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://meinkebab.fr",
    siteName: infos.name,
    title: `${infos.name} - ${infos.slogan}`,
    description: `${infos.slogan}. Broche maison, légumes grillés frais, sauces onctueuses.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: infos.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${infos.name} - ${infos.slogan}`,
    description: `${infos.slogan}. Broche maison, légumes grillés frais, sauces onctueuses.`,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: infos.name,
    description: infos.slogan,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 Pl. Déliot",
      addressLocality: "Lille",
      postalCode: "59000",
      addressCountry: "FR",
    },
    telephone: infos.phone,
    email: infos.email,
    servesCuisine: ["Turc", "Street Food", "Kebab"],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: infos.rating.toString(),
      reviewCount: infos.reviews_count.toString(),
    },
    openingHoursSpecification: infos.hours
      .filter((h) => !h.closed && h.open && h.close)
      .map((h) => {
        const dayMap: Record<string, string> = {
          lundi: "Mo",
          mardi: "Tu",
          mercredi: "We",
          jeudi: "Th",
          vendredi: "Fr",
          samedi: "Sa",
          dimanche: "Su",
        };
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayMap[h.day] || h.day,
          opens: h.open,
          closes: h.close,
        };
      }),
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <SiteHeader />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
