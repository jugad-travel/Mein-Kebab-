"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ChefHat, UtensilsCrossed, Droplets, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Card } from "@/components/primitives/Card";
import { Button } from "@/components/primitives/Button";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { MapCard } from "@/components/MapCard";
import { infos, menu, type MenuItem } from "@/lib/data";
import { PriceTag } from "@/components/PriceTag";
import { motion } from "framer-motion";
import { Icon } from "@/components/primitives/Icon";

export default function Home() {
  const menuTeasers: MenuItem[] = menu.categories
    .flatMap((cat) => cat.items)
    .filter((item): item is MenuItem => ["Berliner", "À l'Ancienne", "Veggy (falafel)"].includes(item.name))
    .slice(0, 3);

  const featureDescriptions = [
    "Broche de poulet préparée quotidiennement avec soin",
    "Légumes frais livrés chaque jour et grillés sur place",
    "Sauces onctueuses préparées maison selon nos recettes",
  ];

  return (
    <>
      <Hero />

      {/* Bandeau infos clés */}
      <section className="border-y border-gris-ardoise/30 bg-gris-ardoise/60 py-4 sm:py-6 md:py-8 w-full" aria-label="Informations clés">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 fill-jaune-epices text-jaune-epices" aria-hidden="true" />
              <span className="font-bold text-blanc-pur">
                {infos.rating}/5 — {infos.reviews_count} avis
              </span>
            </div>
            {infos.services.map((service) => (
              <span key={service} className="flex items-center gap-3 text-blanc-pur/80">
                <span className="text-rouge-broche font-bold">●</span>
                {service}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Nos engagements */}
      <Section id="features" variant="light" className="!pt-12 md:!pt-16">
        <Container>
          <div className="mb-8 sm:mb-16 text-center">
            <Heading level={2} className="mb-2 sm:mb-4">Nos engagements</Heading>
            <p className="text-base sm:text-xl text-blanc-pur/80">Ce qui fait la différence</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
            {infos.features.slice(0, 3).map((feature, index) => {
              const icons = [ChefHat, UtensilsCrossed, Droplets];
              const IconComponent = icons[index] || ChefHat;
              return (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <Card hover className="h-full border-2 border-rouge-broche">
                    <div className="text-center">
                      <Heading level={3} className="mb-3 sm:mb-4">{feature}</Heading>
                      <p className="text-base sm:text-lg leading-relaxed text-blanc-pur/70">
                        {featureDescriptions[index]}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Concept */}
      <Section id="concept" variant="dark" className="!pt-12 md:!pt-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Heading level={2}>
                Une recette authentique,
                <span className="block text-rouge-broche">inspirée de Berlin</span>
              </Heading>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-blanc-pur/90">
                <p>
                  Chez Mein Berliner, on prépare un véritable Gemüse Kebap de Berlin : une broche de poulet travaillée maison, des légumes grillés chaque jour, un pain moelleux, des sauces onctueuses et une générosité assumée.
                </p>
                <p>
                  Sur place, à emporter, et terrasse quand il fait beau.
                </p>
              </div>
              <div className="space-y-3 pt-4">
                {[
                  "Broche maison préparée quotidiennement",
                  "Légumes frais livrés chaque jour",
                  "Sauces onctueuses préparées sur place",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-blanc-pur/80"
                  >
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-rouge-broche" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-14"
            >
              <Image
                src="/images/kebab mein kebab.jpg"
                alt="Kebab Mein Berliner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Menu express */}
      <Section id="menu" variant="light" className="!pt-12 md:!pt-16">
        <Container>
          <div className="mb-8 sm:mb-16 text-center">
            <Heading level={2} className="mb-2 sm:mb-4">Menu express</Heading>
            <p className="text-base sm:text-xl text-blanc-pur/80">Découvrez nos spécialités</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
            {menuTeasers.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex flex-col"
              >
                <Card hover className="flex h-full flex-col">
                  <Heading level={3} className="mb-4">{item.name}</Heading>
                  {"description" in item && item.description && (
                    <p className="mb-4 sm:mb-6 flex-1 text-base sm:text-lg leading-relaxed text-blanc-pur/70">{item.description}</p>
                  )}
                  <div className="mt-auto space-y-4">
                    {"price" in item && item.price && (
                      <div>
                        <PriceTag price={item.price} aConfirmer={item._a_confirmer} />
                      </div>
                    )}
                    <Link
                      href="/menu"
                      className="inline-flex items-center gap-2 text-lg font-semibold text-rouge-broche transition-all hover:gap-4 hover:text-rouge-broche-light"
                    >
                      Voir plus
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 mb-12 md:mb-16 text-center">
            <Button as="a" href="/menu" size="lg">
              Voir tout le menu
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Avis clients */}
      <Section id="reviews" variant="dark" className="bg-gris-ardoise/50 !pt-12 md:!pt-16">
        <Container>
          <div className="mb-8 sm:mb-16 text-center">
            <Heading level={2} className="mb-2 sm:mb-4">Avis clients</Heading>
            <p className="text-base sm:text-xl text-blanc-pur/80">
              {infos.rating}/5 étoiles — {infos.reviews_count} avis
            </p>
          </div>
          <div className="mb-8 sm:mb-12 md:mb-16">
            <ReviewCarousel />
          </div>
          <div className="text-center">
            <Button
              as="a"
              href={infos.google_reviews_url}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              Voir plus d'avis
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Avis du Chti */}
      <Section id="chti-review" variant="light" className="!pt-12 md:!pt-16">
        <Container>
          <div className="mb-8 sm:mb-16 text-center">
            <Heading level={2} className="mb-2 sm:mb-4">Ils parlent de nous</Heading>
            <a
              href="https://lechti.com/place/mein-berliner-kebap/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base sm:text-lg text-rouge-broche transition-colors hover:text-rouge-broche-light"
            >
              Lire l'article complet sur Le Chti
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="p-6 sm:p-8">
                <div className="mb-6 flex gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-jaune-epices text-jaune-epices" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-lg sm:text-xl leading-relaxed text-blanc-pur/90 italic">
                  "Je n'aurais jamais imaginé trouver mon Berlinois dans le Nord. La première chose qui m'a attiré chez lui, c'est son alléchant parfum de street food. Mon amant sait être si doux avec moi, surtout lorsqu'il se pare de légumes grillés ou de feta fondante. Mais c'est finalement son petit côté bad boy, lorsqu'il opte pour la sauce samouraï, qui me fait craquer. Sa générosité et sa convivialité m'ont charmé et le mieux dans tout ça, c'est qu'il m'accompagne partout."
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src="/images/le-chti-grand-lille.png"
                    alt="Le Chti Grand Lille"
                    className="h-20 w-auto object-contain max-w-[200px]"
                    onError={(e) => {
                      console.error('Image not found:', e.currentTarget.src);
                    }}
                  />
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video overflow-hidden rounded-14"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/hPmoe2-n2Qg"
                title="Avis du Chti - Mein Berliner"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact" variant="dark" className="!pt-12 md:!pt-16">
        <Container>
          <div className="mb-12 sm:mb-20 text-center">
            <Heading level={2}>Infos utiles</Heading>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <Heading level={3} className="mb-4 sm:mb-6">📍 Adresse</Heading>
                <p className="text-base sm:text-xl text-blanc-pur/80">{infos.address}</p>
              </div>
              <div>
                <Heading level={3} className="mb-4 sm:mb-6">⏰ Horaires</Heading>
                <div className="space-y-3">
                  {infos.hours.map((dayHours) => (
                    <div key={dayHours.day} className="flex items-center justify-between rounded-14 px-4 sm:px-5 py-3 text-sm sm:text-lg">
                      <span className="font-semibold capitalize text-blanc-pur/90">{dayHours.day}</span>
                      {dayHours.closed ? (
                        <span className="text-blanc-pur/50">Fermé</span>
                      ) : (
                        <span className="text-blanc-pur/80">{dayHours.open} - {dayHours.close}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-5 sm:flex-row pt-4">
                <Button as="a" href={`tel:${infos.phone}`} size="lg" className="w-auto max-w-[200px] sm:w-auto text-sm sm:text-lg py-3 sm:py-5 min-h-[44px] sm:min-h-auto">
                  Appeler
                </Button>
                <Button as="a" href={infos.google_maps_url} variant="outline" size="lg" className="w-auto max-w-[200px] sm:w-auto text-sm sm:text-lg py-3 sm:py-5 min-h-[44px] sm:min-h-auto">
                  Itinéraire
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] overflow-hidden rounded-14"
            >
              <Image
                src="/images/vue exterireure mein kebab.jpg"
                alt="Vue extérieure Mein Berliner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
          {/* Carte Google Maps */}
          <div className="mt-16 mb-12 md:mb-16">
            <MapCard />
          </div>
        </Container>
      </Section>
    </>
  );
}
