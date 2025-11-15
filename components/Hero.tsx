"use client";

import Image from "next/image";
import { ArrowRight, MapPin, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "./primitives/Container";
import { infos } from "@/lib/data";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 sm:pt-20 w-full"
      aria-labelledby="hero-title"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ 
            transform: 'scale(1.3, 1.3)', 
            transformOrigin: 'bottom right',
            willChange: 'transform'
          }}
        >
          <Image
            src="/images/hero/kebab mein home page.jpg"
            alt="Mein Berliner - Le vrai Gemüse Kebap de Berlin"
            fill
            priority
            quality={90}
            className="object-contain object-bottom object-right"
            sizes="100vw"
            style={{ imageRendering: 'auto' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-noir-charbon/70 via-noir-charbon/50 to-noir-charbon/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-charbon/95 via-noir-charbon/40 via-noir-charbon/20 via-transparent to-noir-charbon/60" />
      </div>

      {/* Contenu */}
      <Container className="relative z-10">
        <div className="flex min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] items-center py-8 sm:py-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full"
          >
            {/* Badge Willkommen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4 sm:mb-8 text-left"
            >
              <p className="text-xs sm:text-base font-medium uppercase tracking-wider text-blanc-pur" style={{ fontFamily: "'Inter', sans-serif" }}>
                WILLKOMMEN IN MEIN BERLINER
              </p>
            </motion.div>

            {/* Titre principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8 sm:mb-16 text-left"
            >
              <h1
                id="hero-title"
                className="font-montserrat text-5xl font-black leading-[0.95] text-blanc-pur sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
              >
                <span className="block tracking-tight">MEIN BERLINER</span>
                <span className="block tracking-tight">LE VRAI</span>
                <span className="block tracking-tight">GEMÜSE KEBAP</span>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <span className="block text-rouge-broche tracking-tight">DE BERLIN</span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal normal-case tracking-normal text-blanc-pur" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                    À LILLE
                  </span>
                </div>
              </h1>
            </motion.div>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8 sm:mt-12 flex flex-col items-start gap-4 sm:gap-6"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                <a
                  href="/contact"
                  className="group flex items-center justify-center gap-2 sm:gap-3 rounded-14 border-2 border-rouge-broche bg-noir-charbon/80 px-6 py-3 sm:px-12 sm:py-5 text-sm sm:text-lg font-bold uppercase tracking-wider text-blanc-pur backdrop-blur-sm transition-all duration-300 hover:bg-rouge-broche hover:scale-105 w-full sm:w-auto"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>NOUS TROUVER</span>
                </a>
              </div>
              <a
                href={infos.ubereats_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 sm:gap-3 rounded-14 border-2 border-jaune-epices bg-jaune-epices/20 px-6 py-3 sm:px-12 sm:py-5 text-sm sm:text-lg font-bold uppercase tracking-wider text-blanc-pur backdrop-blur-sm transition-all duration-300 hover:bg-jaune-epices hover:text-noir-charbon hover:scale-105 w-full sm:w-auto"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>COMMANDER SUR UBER EATS</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
