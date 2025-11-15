"use client";

import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Card } from "@/components/primitives/Card";
import { Button } from "@/components/primitives/Button";
import { Star, ExternalLink } from "lucide-react";
import { reviews, infos } from "@/lib/data";

export function AvisContent() {

  return (
    <Section id="avis-page" variant="dark">
      <Container>
        <div className="mb-12 text-center">
          <Heading level={2} className="mb-3">Avis clients</Heading>
          <p className="text-lg text-blanc-pur/70">
            {infos.rating}/5 étoiles — {infos.reviews_count} avis
          </p>
        </div>

        <div className="space-y-8">
          {/* Liste des avis */}
          {reviews.map((review, index) => (
            <div key={`${review.author}-${index}`} className="border-b border-gris-ardoise/30 pb-6 last:border-b-0 last:pb-0">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-jaune-epices text-jaune-epices"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-base font-semibold text-blanc-pur">{review.author}</span>
              </div>
              <p className="text-base leading-relaxed text-blanc-pur/80">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Bouton Google */}
        <div className="mt-12 text-center">
          <Button
            as="a"
            href={`https://www.google.com/maps/place/?q=${encodeURIComponent(infos.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Laisser un avis sur Google
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
