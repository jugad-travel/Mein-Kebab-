"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LogoMeinKebab } from "./LogoMeinKebab";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./primitives/Container";
import { Button } from "./primitives/Button";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/menu", label: "Menu" },
    { href: "/photos", label: "Photos" },
    { href: "/avis", label: "Avis" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-noir-charbon border-b border-blanc-pur/10 shadow-2xl"
          : "bg-noir-charbon sm:bg-transparent"
      )}
      role="banner"
      style={{ width: '100%' }}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Navigation principale">
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-rouge-broche"
            aria-label="Retour à l'accueil"
          >
            <div className="relative">
              <LogoMeinKebab className="h-12 w-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-full bg-rouge-broche/20 blur-xl" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="block font-montserrat text-xl font-black uppercase leading-tight text-blanc-pur" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                MEIN BERLINER
              </span>
              <span className="block text-xs font-light uppercase tracking-wider text-blanc-pur/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                Berliner Döner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Style bold moderne */}
          <ul className="hidden items-center gap-8 md:flex" role="list">
            {navItems.map((item) => (
              <li key={item.href} role="listitem">
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-rouge-broche focus-visible:outline-2 focus-visible:outline-rouge-broche",
                    pathname === item.href
                      ? "text-rouge-broche"
                      : "text-blanc-pur/90"
                  )}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 h-1 w-full bg-rouge-broche shadow-lg shadow-rouge-broche/50"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button as="a" href="/menu" size="sm" className="font-bold">
              Voir le menu
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center rounded-2xl p-3 text-blanc-pur transition-colors hover:bg-blanc-pur/10 focus-visible:outline-2 focus-visible:outline-rouge-broche md:hidden min-h-[48px] min-w-[48px]"
            aria-label="Menu mobile"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass border-t border-blanc-pur/10 md:hidden"
          >
            <Container>
              <ul className="space-y-3 py-6" role="list">
                {navItems.map((item) => (
                  <li key={item.href} role="listitem">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-wider transition-colors hover:bg-blanc-pur/10 focus-visible:outline-2 focus-visible:outline-rouge-broche min-h-[52px] flex items-center",
                        pathname === item.href
                          ? "text-rouge-broche bg-rouge-broche/10"
                          : "text-blanc-pur/90"
                      )}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Button as="a" href="/menu" size="lg" className="mt-4 w-full font-bold">
                    Voir le menu
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
