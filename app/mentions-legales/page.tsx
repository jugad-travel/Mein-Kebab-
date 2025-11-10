import { Section } from "@/components/Section";
import { infos } from "@/lib/data";

export default function MentionsLegalesPage() {
  return (
    <Section
      id="mentions-legales"
      title="Mentions légales"
      className="min-h-screen bg-noir-charbon pt-8"
    >
      <div className="mx-auto max-w-3xl space-y-8 text-blanc-pur/80">
        <div>
          <h2 className="mb-4 font-display text-2xl text-blanc-pur">Éditeur du site</h2>
          <p>
            <strong>{infos.name}</strong>
            <br />
            {infos.address}
            <br />
            Téléphone : {infos.phone}
            <br />
            Email : {infos.email}
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl text-blanc-pur">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789
            <br />
            États-Unis
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl text-blanc-pur">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl text-blanc-pur">Données personnelles</h2>
          <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à l'adresse : {infos.email}
          </p>
        </div>
      </div>
    </Section>
  );
}

