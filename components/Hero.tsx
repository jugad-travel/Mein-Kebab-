"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { infos } from "@/lib/data";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-noir-charbon"
      aria-labelledby="hero-title"
    >
      {/* Image de fond placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-charbon/80 to-noir-charbon">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjMUYyMzI5Ii8+PHRleHQgeD0iNjAwIiB5PSI0MDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UGhvdG8gS2ViYWIgUGxhY2Vob2xkZXI8L3RleHQ+PC9zdmc+')] bg-cover bg-center opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            id="hero-title"
            className="mb-4 font-display text-5xl font-normal leading-tight text-blanc-pur sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {infos.slogan}
          </h1>
          <p className="mb-8 text-lg text-blanc-pur/80 sm:text-xl">
            Le meilleur de la cuisine kebab, façon Berlin.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#menu"
              className="flex items-center gap-2 rounded-2xl bg-rouge-broche px-6 py-3 text-base font-medium text-blanc-pur shadow-lg transition-all hover:bg-rouge-broche-hover hover:shadow-xl focus-visible:outline-2 focus-visible:outline-rouge-broche"
            >
              Voir le menu
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-2xl border-2 border-blanc-pur/20 bg-blanc-pur/10 px-6 py-3 text-base font-medium text-blanc-pur backdrop-blur-sm transition-all hover:border-blanc-pur/40 hover:bg-blanc-pur/20 focus-visible:outline-2 focus-visible:outline-rouge-broche"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Nous trouver
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

