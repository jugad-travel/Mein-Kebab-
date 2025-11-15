"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ChevronDown } from "lucide-react";
import { reviews } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./primitives/Card";
import { Button } from "./primitives/Button";

const MAX_LENGTH = 200;

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

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

  const toggleExpand = () => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(currentIndex)) {
        newSet.delete(currentIndex);
      } else {
        newSet.add(currentIndex);
      }
      return newSet;
    });
  };

  const isExpanded = expandedReviews.has(currentIndex);
  const currentReview = reviews[currentIndex];
  const isLong = currentReview.text.length > MAX_LENGTH;
  const displayText = isExpanded || !isLong 
    ? currentReview.text 
    : `${currentReview.text.substring(0, MAX_LENGTH)}...`;

  return (
    <div className="relative">
      <Card className="relative overflow-hidden p-6 sm:p-8 md:p-12">
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 opacity-10">
          <Quote className="h-16 w-16 sm:h-24 sm:w-24 text-rouge-broche" aria-hidden="true" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="mb-6 flex gap-2">
              {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Star className="h-6 w-6 fill-jaune-epices text-jaune-epices" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
            <blockquote className="mb-4 sm:mb-6 text-base sm:text-xl md:text-2xl lg:text-3xl font-medium italic leading-relaxed text-blanc-pur/90">
              "{displayText}"
            </blockquote>
            {isLong && (
              <button
                onClick={toggleExpand}
                className="mb-4 flex items-center gap-2 text-sm font-semibold text-rouge-broche transition-colors hover:text-rouge-broche-light"
              >
                {isExpanded ? "Voir moins" : "Voir plus"}
                <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}
            <p className="text-base sm:text-lg font-bold text-rouge-broche">
              — {currentReview.author}
            </p>
          </motion.div>
        </AnimatePresence>
      </Card>

      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6">
        <Button
          variant="secondary"
          size="md"
          onClick={goToPrevious}
          className="rounded-full p-3"
          aria-label="Avis précédent"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </Button>

        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-12 bg-rouge-broche shadow-lg shadow-rouge-broche/50"
                  : "w-2 bg-blanc-pur/30 hover:bg-blanc-pur/50"
              }`}
              aria-label={`Aller à l'avis ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="secondary"
          size="md"
          onClick={goToNext}
          className="rounded-full p-3"
          aria-label="Avis suivant"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
