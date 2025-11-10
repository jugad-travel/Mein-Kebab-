"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { LogoMeinKebab } from "./LogoMeinKebab";
import { infos } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/menu", label: "Menu" },
    { href: "/photos", label: "Photos" },
    { href: "/avis", label: "Avis" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gris-ardoise bg-noir-charbon/95 backdrop-blur-sm"
      role="banner"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4" aria-label="Navigation principale">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-rouge-broche"
          aria-label="Retour à l'accueil"
        >
          <LogoMeinKebab className="h-10 w-10" />
          <span className="hidden font-display text-xl text-blanc-pur sm:block">
            Mein Kebab
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex" role="list">
          {navItems.map((item) => (
            <li key={item.href} role="listitem">
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-rouge-broche focus-visible:outline-2 focus-visible:outline-rouge-broche",
                  pathname === item.href
                    ? "text-rouge-broche"
                    : "text-blanc-pur/80"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${infos.phone}`}
          className="flex items-center gap-2 rounded-2xl bg-rouge-broche px-4 py-2 text-sm font-medium text-blanc-pur transition-colors hover:bg-rouge-broche-hover focus-visible:outline-2 focus-visible:outline-rouge-broche"
          aria-label={`Appeler ${infos.phone}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Appeler</span>
        </a>
      </nav>
    </header>
  );
}

