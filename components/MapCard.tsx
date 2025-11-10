"use client";

import { MapPin, ExternalLink } from "lucide-react";
import { infos } from "@/lib/data";

export function MapCard() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/50 p-6">
        <div className="mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-rouge-broche" aria-hidden="true" />
          <h3 className="font-display text-2xl text-blanc-pur">Adresse</h3>
        </div>
        <p className="text-blanc-pur/80">{infos.address}</p>
        <a
          href={infos.google_maps_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-rouge-broche px-4 py-2 text-sm font-medium text-blanc-pur transition-colors hover:bg-rouge-broche-hover focus-visible:outline-2 focus-visible:outline-rouge-broche"
        >
          Itinéraire
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gris-ardoise">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dS6a4ZUU5JhZ0&q=${encodeURIComponent(infos.address)}`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte Google Maps - Mein Kebab"
          aria-label="Carte Google Maps montrant l'emplacement du restaurant"
        />
      </div>
    </div>
  );
}

