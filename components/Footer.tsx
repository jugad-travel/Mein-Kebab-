import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { LogoMeinKebab } from "./LogoMeinKebab";
import { infos } from "@/lib/data";
import { Hours } from "./Hours";

export function Footer() {
  return (
    <footer className="border-t border-gris-ardoise bg-noir-charbon" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo et description */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <LogoMeinKebab className="h-8 w-8" />
              <span className="font-display text-xl text-blanc-pur">Mein Kebab</span>
            </div>
            <p className="mb-4 text-sm text-blanc-pur/70">{infos.slogan}</p>
            <div className="space-y-2 text-sm text-blanc-pur/70">
              <a
                href={`tel:${infos.phone}`}
                className="flex items-center gap-2 hover:text-rouge-broche"
                aria-label={`Appeler ${infos.phone}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {infos.phone}
              </a>
              <a
                href={`mailto:${infos.email}`}
                className="flex items-center gap-2 hover:text-rouge-broche"
                aria-label={`Envoyer un email à ${infos.email}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {infos.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" aria-hidden="true" />
                <span>{infos.address}</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="mb-4 font-display text-xl text-blanc-pur">Horaires</h3>
            <Hours />
          </div>

          {/* Liens */}
          <div>
            <h3 className="mb-4 font-display text-xl text-blanc-pur">Liens</h3>
            <nav className="space-y-2" aria-label="Navigation du pied de page">
              <Link
                href="/"
                className="block text-sm text-blanc-pur/70 hover:text-rouge-broche"
              >
                Accueil
              </Link>
              <Link
                href="/menu"
                className="block text-sm text-blanc-pur/70 hover:text-rouge-broche"
              >
                Menu
              </Link>
              <Link
                href="/photos"
                className="block text-sm text-blanc-pur/70 hover:text-rouge-broche"
              >
                Photos
              </Link>
              <Link
                href="/avis"
                className="block text-sm text-blanc-pur/70 hover:text-rouge-broche"
              >
                Avis
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-blanc-pur/70 hover:text-rouge-broche"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-6 space-y-2">
              <Link
                href="/mentions-legales"
                className="block text-xs text-blanc-pur/50 hover:text-blanc-pur/70"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="block text-xs text-blanc-pur/50 hover:text-blanc-pur/70"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gris-ardoise pt-8 text-center text-sm text-blanc-pur/50">
          <p>© {new Date().getFullYear()} Mein Kebab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

