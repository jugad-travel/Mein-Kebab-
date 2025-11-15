"use client";

import { ExternalLink } from "lucide-react";
import { infos } from "@/lib/data";
import { motion } from "framer-motion";
import { Card } from "./primitives/Card";
import { Button } from "./primitives/Button";

export function MapCard() {
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(infos.address)}&output=embed`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative space-y-6"
    >
      <Card className="relative overflow-hidden p-0">
        <iframe
          src={mapsEmbedUrl}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte Google Maps - Mein Berliner"
          aria-label="Carte Google Maps montrant l'emplacement du restaurant"
          className="w-full"
        />
      </Card>
      <div className="text-center">
        <Button as="a" href={infos.google_maps_url} target="_blank" rel="noopener noreferrer" size="lg">
          Ouvrir dans Google Maps
          <ExternalLink className="h-5 w-5" />
        </Button>
      </div>
    </motion.div>
  );
}
