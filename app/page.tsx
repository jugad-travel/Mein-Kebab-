"use client";

import Link from "next/link";
import { Star, ChefHat, UtensilsCrossed, Droplets } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Hours } from "@/components/Hours";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { MapCard } from "@/components/MapCard";
import { infos, menu, type MenuItem } from "@/lib/data";
import { PriceTag } from "@/components/PriceTag";
import { motion } from "framer-motion";

export default function Home() {
  const menuTeasers: MenuItem[] = menu.categories
    .flatMap((cat) => cat.items)
    .filter((item): item is MenuItem => ["Berliner", "À l'Ancienne", "Veggy (falafel)"].includes(item.name))
    .slice(0, 3);

  return (
    <>
      <Hero />

      {/* Bandeau infos clés */}
      <section className="border-b border-gris-ardoise bg-gris-ardoise/30 py-6" aria-label="Informations clés">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blanc-pur/80">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-jaune-epices text-jaune-epices" aria-hidden="true" />
              <span className="font-medium">
                {infos.rating}/5 — {infos.reviews_count} avis
              </span>
            </div>
            {infos.services.map((service) => (
              <span key={service} className="flex items-center gap-2">
                <span className="text-rouge-broche">•</span>
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3 piliers */}
      <Section
        id="features"
        title="Nos engagements"
        subtitle="Ce qui fait la différence"
        className="bg-noir-charbon"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {infos.features.slice(0, 3).map((feature, index) => {
            const icons = [ChefHat, UtensilsCrossed, Droplets];
            const Icon = icons[index] || ChefHat;
            return (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/30 p-6 text-center"
              >
                <Icon className="mx-auto mb-4 h-12 w-12 text-rouge-broche" aria-hidden="true" />
                <h3 className="mb-2 font-display text-2xl text-blanc-pur">{feature}</h3>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Concept */}
      <Section
        id="concept"
        title="Notre concept"
        className="bg-gris-ardoise/20"
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-lg leading-relaxed text-blanc-pur/90">
            Chez Mein Kebab, on prépare un véritable Gemüse Kebap de Berlin : une broche de poulet travaillée maison, des légumes grillés chaque jour, un pain moelleux, des sauces onctueuses et une générosité assumée. Sur place, à emporter, et terrasse quand il fait beau.
          </p>
          <div className="space-y-2 text-blanc-pur/70">
            <p className="italic">« Le meilleur de la cuisine kebab, façon Berlin. »</p>
            <p className="italic">« Croquant, moelleux, grillé : l'équilibre parfait. »</p>
          </div>
        </div>
      </Section>

      {/* Menu express */}
      <Section
        id="menu"
        title="Menu express"
        subtitle="Découvrez nos spécialités"
        className="bg-noir-charbon"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {menuTeasers.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-gris-ardoise bg-gris-ardoise/30 p-6 transition-all hover:border-rouge-broche/50 hover:shadow-lg"
            >
              <h3 className="mb-2 font-display text-2xl text-blanc-pur">{item.name}</h3>
              {item.description && (
                <p className="mb-4 text-sm text-blanc-pur/70">{item.description}</p>
              )}
              {item.price && (
                <PriceTag price={item.price} aConfirmer={item._a_confirmer} />
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-2xl bg-rouge-broche px-6 py-3 font-medium text-blanc-pur transition-colors hover:bg-rouge-broche-hover focus-visible:outline-2 focus-visible:outline-rouge-broche"
          >
            Voir tout le menu
          </Link>
        </div>
      </Section>

      {/* Avis clients */}
      <Section
        id="reviews"
        title="Avis clients"
        className="bg-gris-ardoise/20"
      >
        <ReviewCarousel />
      </Section>

      {/* Horaires du jour */}
      <Section
        id="hours"
        title="Horaires"
        className="bg-noir-charbon"
      >
        <div className="mx-auto max-w-2xl">
          <Hours />
        </div>
      </Section>

      {/* Contact / CTA final */}
      <Section
        id="contact"
        title="Nous contacter"
        className="bg-gris-ardoise/20"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-display text-2xl text-blanc-pur">Adresse</h3>
              <p className="text-blanc-pur/80">{infos.address}</p>
            </div>
            <div>
              <h3 className="mb-4 font-display text-2xl text-blanc-pur">Téléphone</h3>
              <a
                href={`tel:${infos.phone}`}
                className="text-lg text-rouge-broche hover:underline focus-visible:outline-2 focus-visible:outline-rouge-broche"
              >
                {infos.phone}
              </a>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${infos.phone}`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-rouge-broche px-6 py-3 font-medium text-blanc-pur transition-colors hover:bg-rouge-broche-hover focus-visible:outline-2 focus-visible:outline-rouge-broche"
              >
                Appeler
              </a>
              <a
                href={infos.google_maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-rouge-broche bg-transparent px-6 py-3 font-medium text-rouge-broche transition-colors hover:bg-rouge-broche/10 focus-visible:outline-2 focus-visible:outline-rouge-broche"
              >
                Itinéraire
              </a>
            </div>
          </div>
          <MapCard />
        </div>
      </Section>
    </>
  );
}
