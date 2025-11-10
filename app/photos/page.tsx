"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { infos } from "@/lib/data";

// Placeholder images - à remplacer par de vraies images
const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://images.unsplash.com/photo-${1576869200000 + i}?w=800&h=600&fit=crop`,
  alt: `Photo ${i + 1} - ${infos.name}`,
  category: i % 3 === 0 ? "Plats" : i % 3 === 1 ? "Terrasse" : "Salle",
}));

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <Section
      id="photos-page"
      title="Photos"
      subtitle="Découvrez notre restaurant en images"
      className="min-h-screen bg-noir-charbon pt-8"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedPhoto(photo.id)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-noir-charbon/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-sm text-blanc-pur opacity-0 transition-opacity group-hover:opacity-100">
              {photo.category}
            </div>
            <div className="h-full w-full bg-gris-ardoise" />
            {/* Placeholder - à remplacer par next/image */}
            <div className="absolute inset-0 flex items-center justify-center text-blanc-pur/30">
              Photo {photo.id}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir-charbon/95 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-4 top-4 rounded-full bg-gris-ardoise p-2 text-blanc-pur transition-colors hover:bg-rouge-broche focus-visible:outline-2 focus-visible:outline-rouge-broche"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-[80vh] w-[80vw] bg-gris-ardoise" />
              <div className="absolute inset-0 flex items-center justify-center text-blanc-pur/30">
                Photo {selectedPhoto}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

