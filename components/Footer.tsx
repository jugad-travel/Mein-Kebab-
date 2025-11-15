"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { LogoMeinKebab } from "./LogoMeinKebab";
import { infos } from "@/lib/data";
import { motion } from "framer-motion";
import { Container } from "./primitives/Container";
import { Heading } from "./primitives/Heading";
import { Icon } from "./primitives/Icon";

export function Footer() {
  return (
    <footer className="!pt-12 md:!pt-16 border-t-2 border-gris-ardoise/30 bg-gradient-to-b from-noir-charbon via-gris-ardoise/30 to-noir-charbon w-full" role="contentinfo" style={{ width: '100%', margin: 0, padding: 0 }}>
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:gap-12 py-8 sm:py-12 sm:grid-cols-2 md:grid-cols-3">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <LogoMeinKebab className="h-10 w-10" />
              <div>
                <span className="block font-display text-xl text-blanc-pur">Mein Berliner</span>
                <span className="block text-xs text-blanc-pur/60 uppercase tracking-wider">Berliner Döner</span>
              </div>
            </div>
            <p className="text-base leading-relaxed text-blanc-pur/80">{infos.slogan}</p>
            <div className="space-y-3 text-sm text-blanc-pur/70">
              <a
                href={`tel:${infos.phone}`}
                className="flex items-center gap-3 rounded-14 px-3 py-2 transition-colors hover:bg-gris-ardoise/50 hover:text-rouge-broche"
                aria-label={`Appeler ${infos.phone}`}
              >
                <Icon icon={Phone} size="md" />
                <span className="font-semibold">{infos.phone}</span>
              </a>
              <a
                href={`mailto:${infos.email}`}
                className="flex items-center gap-3 rounded-14 px-3 py-2 transition-colors hover:bg-gris-ardoise/50 hover:text-rouge-broche"
                aria-label={`Envoyer un email à ${infos.email}`}
              >
                <Icon icon={Mail} size="md" />
                <span className="font-semibold">{infos.email}</span>
              </a>
              <div className="flex items-start gap-3 rounded-14 px-3 py-2">
                <Icon icon={MapPin} size="md" className="mt-1 flex-shrink-0" />
                <span className="font-semibold">{infos.address}</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gris-ardoise text-blanc-pur transition-all duration-300 hover:bg-rouge-broche hover:scale-110"
                aria-label="Facebook"
              >
                <Icon icon={Facebook} size="md" />
              </a>
              <a
                href="https://www.instagram.com/reel/C18ENVUIWE-/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gris-ardoise text-blanc-pur transition-all duration-300 hover:bg-rouge-broche hover:scale-110"
                aria-label="Instagram"
              >
                <Icon icon={Instagram} size="md" />
              </a>
            </div>
          </motion.div>

          {/* Liens de navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-6"
          >
            <Heading level={3}>Navigation</Heading>
            <nav className="space-y-2" aria-label="Navigation du pied de page">
              {[
                { href: "/", label: "Accueil" },
                { href: "/menu", label: "Menu" },
                { href: "/photos", label: "Photos" },
                { href: "/avis", label: "Avis" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-14 px-3 py-2 text-sm font-semibold text-blanc-pur/70 transition-colors hover:bg-gris-ardoise/50 hover:text-rouge-broche"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-2 pt-2">
              <Link
                href="/mentions-legales"
                className="block text-xs text-blanc-pur/50 transition-colors hover:text-blanc-pur/70"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="block text-xs text-blanc-pur/50 transition-colors hover:text-blanc-pur/70"
              >
                Politique de confidentialité
              </Link>
            </div>
          </motion.div>

          {/* Réseaux sociaux et informations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <Heading level={3}>Suivez-nous</Heading>
            <p className="text-base leading-relaxed text-blanc-pur/80">
              Restez connecté avec nous sur les réseaux sociaux pour découvrir nos dernières actualités et promotions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gris-ardoise text-blanc-pur transition-all duration-300 hover:bg-rouge-broche hover:scale-110"
                aria-label="Facebook"
              >
                <Icon icon={Facebook} size="md" />
              </a>
              <a
                href="https://www.instagram.com/reel/C18ENVUIWE-/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gris-ardoise text-blanc-pur transition-all duration-300 hover:bg-rouge-broche hover:scale-110"
                aria-label="Instagram"
              >
                <Icon icon={Instagram} size="md" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="border-t-2 border-gris-ardoise/30 pt-8 text-center text-sm text-blanc-pur/50"
        >
          <p>© {new Date().getFullYear()} Mein Berliner. Tous droits réservés.</p>
        </motion.div>
      </Container>
    </footer>
  );
}
