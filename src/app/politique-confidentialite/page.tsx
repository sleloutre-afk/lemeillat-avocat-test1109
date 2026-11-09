import LegalPage, { Section } from '@/components/LegalPage'
import { CABINET } from '@/lib/cabinet'

export const metadata = {
  title: `Politique de confidentialité — Maître ${CABINET.nom}`,
  description: `Politique de confidentialité et traitement des données personnelles du site de Maître ${CABINET.nom}.`,
}

const lien = 'text-bordeaux no-underline hover:underline'

export default function PolitiqueConfidentialite() {
  return (
    <LegalPage surtitre="Protection des données" titre="Politique de confidentialité">
      <Section title="Responsable du traitement">
        <p>
          Maître {CABINET.nom}, avocate au {CABINET.barreau}, {CABINET.adresse.join(', ')} —{' '}
          <a href={`mailto:${CABINET.email}`} className={lien}>{CABINET.email}</a>.
        </p>
      </Section>

      <Section title="Données collectées">
        <p>Lorsque vous contactez le cabinet par email ou par téléphone, les données suivantes peuvent être collectées :</p>
        <ul className="list-disc pl-6">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Société et fonction</li>
          <li>Description de votre situation</li>
        </ul>
        <p>Aucune donnée n&apos;est collectée à votre insu. La navigation sur ce site n&apos;implique pas de dépôt de cookies publicitaires ou de traceurs tiers.</p>
      </Section>

      <Section title="Finalité du traitement">
        <p>Les données transmises au cabinet sont utilisées exclusivement pour répondre à votre demande et, le cas échéant, établir une relation client dans le cadre d&apos;une mission juridique. Elles ne font l&apos;objet d&apos;aucune cession, revente ou exploitation commerciale.</p>
      </Section>

      <Section title="Durée de conservation">
        <p>Les données sont conservées pour la durée strictement nécessaire à la gestion de votre demande, et au maximum pour la durée légale applicable aux obligations professionnelles de l&apos;avocat.</p>
      </Section>

      <Section title="Vos droits">
        <p>Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :</p>
        <ul className="list-disc pl-6">
          <li>Droit d&apos;accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l&apos;effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d&apos;opposition</li>
          <li>Droit à la portabilité</li>
        </ul>
        <p>
          Pour exercer ces droits, écrivez à <a href={`mailto:${CABINET.email}`} className={lien}>{CABINET.email}</a> ou par courrier à l&apos;adresse du cabinet. Vous pouvez également introduire une réclamation auprès de la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className={lien}>www.cnil.fr</a>).
        </p>
      </Section>

      <Section title="Hébergement et transfert de données">
        <p>Ce site est hébergé par Vercel Inc. (San Francisco, États-Unis). Les données de navigation peuvent être traitées sur des serveurs situés hors de l&apos;Union européenne. Vercel est certifié conforme au cadre de protection des données UE–États-Unis.</p>
      </Section>
    </LegalPage>
  )
}
