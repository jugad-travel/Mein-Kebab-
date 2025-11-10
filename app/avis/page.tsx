import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Star, ExternalLink } from "lucide-react";
import { reviews, infos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Avis clients",
  description: `Découvrez les avis de nos clients. ${infos.rating}/5 étoiles avec ${infos.reviews_count} avis.`,
};

export default function AvisPage() {
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => r.rating === rating).length,
  }));

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <Section
      id="avis-page"
      title="Avis clients"
      subtitle={`${infos.rating}/5 étoiles — ${infos.reviews_count} avis`}
      className="min-h-screen bg-noir-charbon pt-8"
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Graphique de répartition */}
        <div className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/50 p-6">
          <h3 className="mb-4 font-display text-2xl text-blanc-pur">
            Répartition des notes
          </h3>
          <div className="space-y-3">
            {ratingDistribution.reverse().map(({ rating, count }) => {
              const percentage = (count / reviews.length) * 100;
              return (
                <div key={rating} className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="w-8 text-sm text-blanc-pur/80">{rating}</span>
                    <Star className="h-4 w-4 fill-jaune-epices text-jaune-epices" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="h-4 overflow-hidden rounded-full bg-gris-ardoise">
                      <div
                        className="h-full bg-rouge-broche transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="w-12 text-right text-sm text-blanc-pur/80">
                    {count} ({percentage.toFixed(0)}%)
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Liste des avis */}
        <div className="space-y-4">
          <h3 className="font-display text-2xl text-blanc-pur">Tous les avis</h3>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/30 p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-jaune-epices text-jaune-epices"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="font-medium text-blanc-pur">{review.author}</span>
                </div>
              </div>
              <p className="text-blanc-pur/80">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Bouton Google */}
        <div className="text-center">
          <a
            href={`https://www.google.com/maps/place/?q=${encodeURIComponent(infos.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-rouge-broche px-6 py-3 font-medium text-blanc-pur transition-colors hover:bg-rouge-broche-hover focus-visible:outline-2 focus-visible:outline-rouge-broche"
          >
            Laisser un avis sur Google
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Section>
  );
}

