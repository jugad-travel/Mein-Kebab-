"use client";

import { useState } from "react";
import { menu, type MenuCategory } from "@/lib/data";
import { PriceTag } from "./PriceTag";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./primitives/Container";
import { Heading } from "./primitives/Heading";
import { Card } from "./primitives/Card";
import { Button } from "./primitives/Button";
import { Badge } from "./primitives/Badge";

export function MenuGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = menu.categories;
  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.name === selectedCategory)
    : categories;

  return (
    <Container>
      {/* Filtres par catégorie */}
      <div className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-2 sm:gap-4">
        <Button
          variant={selectedCategory === null ? "primary" : "secondary"}
          size="sm"
          className="text-xs sm:text-sm"
          onClick={() => setSelectedCategory(null)}
        >
          Tout
        </Button>
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "primary" : "secondary"}
            size="sm"
            className="text-xs sm:text-sm"
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Grille de produits */}
      <AnimatePresence mode="wait">
        <div className="space-y-16">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <Heading level={2} className="mb-8">{category.name}</Heading>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, index) => (
                  <motion.div
                    key={`${category.name}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card hover className="h-full flex flex-col">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <Heading level={4} className="flex-1">
                          {item.name}
                        </Heading>
                        {"price" in item && item.price && (
                          <PriceTag
                            price={item.price}
                            aConfirmer={item._a_confirmer}
                          />
                        )}
                      </div>
                      {"description" in item && item.description && (
                        <p className="mb-6 flex-1 text-base sm:text-lg leading-relaxed text-blanc-pur/70">
                          {item.description}
                        </p>
                      )}
                      {"tags" in item && item.tags && item.tags.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant={
                                tag === "best-seller"
                                  ? "primary"
                                  : tag === "veggie"
                                  ? "success"
                                  : "default"
                              }
                              className="text-xs font-bold uppercase tracking-wider"
                            >
                              {tag === "best-seller" && (
                                <>
                                  <span className="mr-1.5">⭐</span>
                                  BEST-SELLER
                                </>
                              )}
                              {tag === "veggie" && (
                                <>
                                  <span className="mr-1.5">🌱</span>
                                  VEGGIE
                                </>
                              )}
                              {tag === "epice" && (
                                <>
                                  <span className="mr-1.5">🌶️</span>
                                  ÉPICÉ
                                </>
                              )}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* Bandeau allergènes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <Card>
          <Heading level={3} className="mb-6">Allergènes présents</Heading>
          <div className="flex flex-wrap gap-4">
            {menu.allergenes.map((allergene) => (
              <Badge key={allergene} variant="default">
                {allergene}
              </Badge>
            ))}
          </div>
          <p className="mt-6 text-base text-blanc-pur/60">
            Les prix et produits sont susceptibles d'évoluer. Merci de vérifier sur place.
          </p>
        </Card>
      </motion.div>
    </Container>
  );
}
