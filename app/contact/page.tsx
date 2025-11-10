"use client";

import { useState, FormEvent } from "react";
import { Section } from "@/components/Section";
import { Hours } from "@/components/Hours";
import { MapCard } from "@/components/MapCard";
import { Phone, Mail, MapPin, Send, Users } from "lucide-react";
import { infos } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envoi via mailto (placeholder - à remplacer par un vrai backend)
    const mailtoLink = `mailto:${infos.email}?subject=Contact depuis le site&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <Section
      id="contact-page"
      title="Nous contacter"
      subtitle="Une question ? N'hésitez pas à nous écrire"
      className="min-h-screen bg-noir-charbon pt-8"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Informations de contact */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/50 p-6 text-center">
            <Phone className="mx-auto mb-4 h-8 w-8 text-rouge-broche" aria-hidden="true" />
            <h3 className="mb-2 font-display text-xl text-blanc-pur">Téléphone</h3>
            <a
              href={`tel:${infos.phone}`}
              className="text-rouge-broche hover:underline focus-visible:outline-2 focus-visible:outline-rouge-broche"
            >
              {infos.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/50 p-6 text-center">
            <Mail className="mx-auto mb-4 h-8 w-8 text-rouge-broche" aria-hidden="true" />
            <h3 className="mb-2 font-display text-xl text-blanc-pur">Email</h3>
            <a
              href={`mailto:${infos.email}`}
              className="text-rouge-broche hover:underline focus-visible:outline-2 focus-visible:outline-rouge-broche"
            >
              {infos.email}
            </a>
          </div>

          <div className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/50 p-6 text-center">
            <MapPin className="mx-auto mb-4 h-8 w-8 text-rouge-broche" aria-hidden="true" />
            <h3 className="mb-2 font-display text-xl text-blanc-pur">Adresse</h3>
            <p className="text-sm text-blanc-pur/80">{infos.address}</p>
          </div>
        </div>

        {/* Formulaire et carte */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/50 p-6">
            <h3 className="mb-6 font-display text-2xl text-blanc-pur">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-blanc-pur/80"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-gris-ardoise bg-noir-charbon px-4 py-2 text-blanc-pur placeholder:text-blanc-pur/40 focus:border-rouge-broche focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-blanc-pur/80"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-gris-ardoise bg-noir-charbon px-4 py-2 text-blanc-pur placeholder:text-blanc-pur/40 focus:border-rouge-broche focus:outline-none"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-blanc-pur/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-gris-ardoise bg-noir-charbon px-4 py-2 text-blanc-pur placeholder:text-blanc-pur/40 focus:border-rouge-broche focus:outline-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-rouge-broche px-6 py-3 font-medium text-blanc-pur transition-colors hover:bg-rouge-broche-hover disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-rouge-broche"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                {isSubmitting ? "Envoi..." : "Envoyer"}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <MapCard />
            <Hours />
          </div>
        </div>

        {/* Accès */}
        <div className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/50 p-6">
          <h3 className="mb-4 font-display text-2xl text-blanc-pur">Accès</h3>
          <div className="space-y-2 text-blanc-pur/80">
            <p>Métro : Ligne 1, station République Beaux-Arts</p>
            <p>Bus : Lignes 10, 14, 50, 56</p>
            <p className="mt-4 flex items-center gap-2">
              <span className="text-rouge-broche">•</span>
              Terrasse disponible
            </p>
          </div>
        </div>

        {/* Rejoindre l'équipe */}
        <div className="rounded-2xl border border-rouge-broche/50 bg-rouge-broche/10 p-6">
          <div className="flex items-start gap-4">
            <Users className="h-6 w-6 text-rouge-broche" aria-hidden="true" />
            <div>
              <h3 className="mb-2 font-display text-xl text-blanc-pur">
                Rejoindre l'équipe
              </h3>
              <p className="mb-4 text-blanc-pur/80">
                Vous souhaitez nous rejoindre ? Envoyez-nous votre candidature.
              </p>
              <a
                href={`mailto:recrutement@meinkebab.fr?subject=Candidature`}
                className="inline-flex items-center gap-2 rounded-2xl bg-rouge-broche px-4 py-2 text-sm font-medium text-blanc-pur transition-colors hover:bg-rouge-broche-hover focus-visible:outline-2 focus-visible:outline-rouge-broche"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                recrutement@meinkebab.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

