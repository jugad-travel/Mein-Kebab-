"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  {
    id: 1,
    src: "/images/kebab mein kebab.jpg",
    alt: "Kebab Mein Berliner",
    category: "Plats",
  },
  {
    id: 2,
    src: "/images/kebabs mein kebab.jpeg",
    alt: "Kebabs Mein Berliner",
    category: "Plats",
  },
  {
    id: 3,
    src: "/images/vue exterireure mein kebab.jpg",
    alt: "Vue extérieure Mein Berliner",
    category: "Restaurant",
  },
  {
    id: 4,
    src: "/images/hero/kebab mein home page.jpg",
    alt: "Kebab Mein Berliner - Hero",
    category: "Plats",
  },
  {
    id: 5,
    src: "/images/logo/kebab mein kebab .jpg",
    alt: "Logo Mein Berliner",
    category: "Restaurant",
  },
];

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const currentPhoto = selectedPhoto ? photos.find((p) => p.id === selectedPhoto) : null;
  const currentIndex = selectedPhoto ? photos.findIndex((p) => p.id === selectedPhoto) : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(photos[currentIndex - 1].id);
    } else {
      setSelectedPhoto(photos[photos.length - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < photos.length - 1) {
      setSelectedPhoto(photos[currentIndex + 1].id);
    } else {
      setSelectedPhoto(photos[0].id);
    }
  };

  return (
    <>
      <Section id="photos-page" variant="dark">
        <Container>
          <div className="mb-8 sm:mb-16 text-center">
            <Heading level={2} className="mb-2 sm:mb-4">Photos</Heading>
            <p className="text-base sm:text-xl text-blanc-pur/80">Découvrez notre restaurant en images</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-14"
                onClick={() => setSelectedPhoto(photo.id)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-charbon/90 via-noir-charbon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-base font-bold text-blanc-pur opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="mb-1 text-sm uppercase tracking-wider text-rouge-broche">
                    {photo.category}
                  </div>
                  <div>{photo.alt}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir-charbon/98 p-4 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-2 top-2 sm:right-6 sm:top-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gris-ardoise text-blanc-pur transition-all duration-300 hover:bg-rouge-broche hover:scale-110"
              aria-label="Fermer"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 top-1/2 sm:left-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gris-ardoise text-blanc-pur transition-all duration-300 hover:bg-rouge-broche hover:scale-110"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 top-1/2 sm:right-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gris-ardoise text-blanc-pur transition-all duration-300 hover:bg-rouge-broche hover:scale-110"
              aria-label="Photo suivante"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto rounded-14 object-contain shadow-2xl"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-14 bg-gradient-to-t from-noir-charbon/95 to-transparent p-6 text-center">
                <div className="mb-2 text-sm uppercase tracking-wider text-rouge-broche">
                  {currentPhoto.category}
                </div>
                <div className="text-xl font-bold text-blanc-pur">{currentPhoto.alt}</div>
                <div className="mt-2 text-sm text-blanc-pur/70">
                  {currentIndex + 1} / {photos.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
