"use client";

import { useState, FormEvent } from "react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Card } from "@/components/primitives/Card";
import { Button } from "@/components/primitives/Button";
import { MapCard } from "@/components/MapCard";
import { Phone, Mail, MapPin, Send, Users } from "lucide-react";
import { infos } from "@/lib/data";
import { motion } from "framer-motion";
import { Icon } from "@/components/primitives/Icon";

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

    const mailtoLink = `mailto:${infos.email}?subject=Contact depuis le site&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <Section id="contact-page" variant="dark">
      <Container>
        <div className="mb-8 sm:mb-16 text-center">
          <Heading level={2} className="mb-2 sm:mb-4">Nous contacter</Heading>
          <p className="text-base sm:text-xl text-blanc-pur/80">Une question ? N'hésitez pas à nous écrire</p>
        </div>

        <div className="space-y-12">
          {/* Informations de contact */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { icon: Phone, title: "Téléphone", content: infos.phone, href: `tel:${infos.phone}` },
              { icon: Mail, title: "Email", content: infos.email, href: `mailto:${infos.email}` },
              { icon: MapPin, title: "Adresse", content: infos.address, href: null },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card hover className="text-center">
                  <div className="mb-4 inline-flex rounded-14 bg-rouge-broche/20 p-4">
                    <Icon icon={item.icon} size="xl" className="text-rouge-broche" />
                  </div>
                  <Heading level={3} className="mb-3">{item.title}</Heading>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg font-bold text-rouge-broche transition-colors hover:text-rouge-broche-light"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-base leading-relaxed text-blanc-pur/80">{item.content}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Formulaire et carte */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card>
              <Heading level={3} className="mb-6">Envoyez-nous un message</Heading>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-base font-bold text-blanc-pur/80">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-14 border-2 border-gris-ardoise/30 bg-noir-charbon px-4 py-3 text-base text-blanc-pur placeholder:text-blanc-pur/40 focus:border-rouge-broche focus:outline-none focus:ring-2 focus:ring-rouge-broche/20"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-base font-bold text-blanc-pur/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-14 border-2 border-gris-ardoise/30 bg-noir-charbon px-4 py-3 text-base text-blanc-pur placeholder:text-blanc-pur/40 focus:border-rouge-broche focus:outline-none focus:ring-2 focus:ring-rouge-broche/20"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-base font-bold text-blanc-pur/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-14 border-2 border-gris-ardoise/30 bg-noir-charbon px-4 py-3 text-base text-blanc-pur placeholder:text-blanc-pur/40 focus:border-rouge-broche focus:outline-none focus:ring-2 focus:ring-rouge-broche/20"
                    placeholder="Votre message..."
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
                  <Send className="h-5 w-5" />
                  {isSubmitting ? "Envoi..." : "Envoyer"}
                </Button>
              </form>
            </Card>

            <div>
              <MapCard />
            </div>
          </div>

          {/* Accès */}
          <Card>
            <Heading level={3} className="mb-6">Accès</Heading>
            <div className="space-y-4 text-blanc-pur/80">
              <p className="flex items-center gap-3 text-lg">
                <span className="text-xl text-rouge-broche">●</span>
                <span>Métro : Ligne 1, station République Beaux-Arts</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <span className="text-xl text-rouge-broche">●</span>
                <span>Bus : Lignes 10, 14, 50, 56</span>
              </p>
              <p className="flex items-center gap-3 pt-2 text-lg font-bold">
                <span className="text-xl text-rouge-broche">●</span>
                <span>Terrasse disponible</span>
              </p>
            </div>
          </Card>

          {/* Rejoindre l'équipe */}
          <Card className="border-rouge-broche/50 bg-rouge-broche/10">
            <div className="flex items-start gap-6">
              <div className="rounded-14 bg-rouge-broche/20 p-3">
                <Icon icon={Users} size="xl" className="text-rouge-broche" />
              </div>
              <div className="flex-1">
                <Heading level={3} className="mb-4">Rejoindre l'équipe</Heading>
                <p className="mb-6 text-lg text-blanc-pur/80">
                  Vous souhaitez nous rejoindre ? Envoyez-nous votre candidature.
                </p>
                <Button as="a" href={`mailto:recrutement@meinkebab.fr?subject=Candidature`} size="lg">
                  <Mail className="h-5 w-5" />
                  recrutement@meinkebab.fr
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
