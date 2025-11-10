import { Section } from "@/components/Section";
import { infos } from "@/lib/data";

export default function ConfidentialitePage() {
  return (
    <Section
      id="confidentialite"
      title="Politique de confidentialité"
      className="min-h-screen bg-noir-charbon pt-8"
    >
      <div className="mx-auto max-w-3xl space-y-8 text-blanc-pur/80">
        <div>
          <h2 className="mb-4 font-display text-2xl text-blanc-pur">
            Collecte des données
          </h2>
          <p>
            Nous collectons les données que vous nous fournissez directement, notamment lorsque vous utilisez notre formulaire de contact. Ces données incluent votre nom et votre adresse email.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl text-blanc-pur">
            Utilisation des données
          </h2>
          <p>
            Les données collectées sont utilisées uniquement pour répondre à vos demandes de contact et améliorer nos services. Nous ne vendons ni ne louons vos données personnelles à des tiers.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl text-blanc-pur">
            Vos droits
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="ml-6 mt-2 list-disc space-y-2">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d'opposition au traitement de vos données</li>
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, contactez-nous à : {infos.email}
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl text-blanc-pur">Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires au fonctionnement du site. Aucun cookie de suivi ou de publicité n'est utilisé.
          </p>
        </div>
      </div>
    </Section>
  );
}

