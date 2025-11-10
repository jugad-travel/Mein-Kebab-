"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-gris-ardoise/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="p-8"
          >
            <div className="mb-4 flex gap-1">
              {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-jaune-epices text-jaune-epices"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mb-4 text-lg italic text-blanc-pur/90">
              "{reviews[currentIndex].text}"
            </blockquote>
            <p className="text-sm font-medium text-rouge-broche">
              — {reviews[currentIndex].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={goToPrevious}
          className="rounded-full bg-gris-ardoise p-2 text-blanc-pur transition-colors hover:bg-rouge-broche focus-visible:outline-2 focus-visible:outline-rouge-broche"
          aria-label="Avis précédent"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === currentIndex
                  ? "w-8 bg-rouge-broche"
                  : "w-2 bg-blanc-pur/30"
              )}
              aria-label={`Aller à l'avis ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="rounded-full bg-gris-ardoise p-2 text-blanc-pur transition-colors hover:bg-rouge-broche focus-visible:outline-2 focus-visible:outline-rouge-broche"
          aria-label="Avis suivant"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

