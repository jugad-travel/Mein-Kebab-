"use client";

import { useState } from "react";
import { menu, type MenuCategory } from "@/lib/data";
import { PriceTag } from "./PriceTag";
import { cn } from "@/lib/utils";

export function MenuGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = menu.categories;
  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.name === selectedCategory)
    : categories;

  return (
    <div>
      {/* Filtres par catégorie */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={cn(
            "rounded-2xl px-4 py-2 text-sm font-medium transition-colors",
            selectedCategory === null
              ? "bg-rouge-broche text-blanc-pur"
              : "bg-gris-ardoise text-blanc-pur/80 hover:bg-gris-ardoise/80"
          )}
        >
          Tout
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={cn(
              "rounded-2xl px-4 py-2 text-sm font-medium transition-colors",
              selectedCategory === category.name
                ? "bg-rouge-broche text-blanc-pur"
                : "bg-gris-ardoise text-blanc-pur/80 hover:bg-gris-ardoise/80"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Grille de produits */}
      <div className="space-y-12">
        {filteredCategories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-6 font-display text-3xl text-blanc-pur">
              {category.name}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, index) => (
                <div
                  key={`${category.name}-${index}`}
                  className="group rounded-2xl border border-gris-ardoise bg-gris-ardoise/30 p-6 transition-all hover:border-rouge-broche/50 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h4 className="font-display text-xl text-blanc-pur">
                      {item.name}
                    </h4>
                    {"price" in item && item.price && (
                      <PriceTag
                        price={item.price}
                        aConfirmer={item._a_confirmer}
                      />
                    )}
                  </div>
                  {"description" in item && item.description && (
                    <p className="mb-3 text-sm text-blanc-pur/70">
                      {item.description}
                    </p>
                  )}
                  {"tags" in item && item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "rounded-full px-2 py-1 text-xs font-medium",
                            tag === "best-seller"
                              ? "bg-rouge-broche text-blanc-pur"
                              : tag === "veggie"
                              ? "bg-jaune-epices text-noir-charbon"
                              : "bg-gris-ardoise text-blanc-pur/80"
                          )}
                        >
                          {tag === "best-seller" && "⭐ Best-seller"}
                          {tag === "veggie" && "🌱 Veggie"}
                          {tag === "epice" && "🌶️ Épicé"}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bandeau allergènes */}
      <div className="mt-12 rounded-2xl border border-gris-ardoise bg-gris-ardoise/50 p-6">
        <p className="mb-2 text-sm font-medium text-blanc-pur">
          Allergènes présents :
        </p>
        <div className="flex flex-wrap gap-2">
          {menu.allergenes.map((allergene) => (
            <span
              key={allergene}
              className="rounded-full bg-noir-charbon px-3 py-1 text-xs text-blanc-pur/80"
            >
              {allergene}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-blanc-pur/60">
          Les prix et produits sont susceptibles d'évoluer. Merci de vérifier sur place.
        </p>
      </div>
    </div>
  );
}

