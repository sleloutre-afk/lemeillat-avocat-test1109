import LegalPage, { Section } from '@/components/LegalPage'
import { CABINET } from '@/lib/cabinet'

export const metadata = {
  title: `Mentions légales — Maître ${CABINET.nom}`,
  description: `Mentions légales du site de Maître ${CABINET.nom}, ${CABINET.titre.toLowerCase()}.`,
}

const lien = 'text-bordeaux no-underline hover:underline'

export default function MentionsLegales() {
  return (
    <LegalPage surtitre="Informations légales" titre="Mentions légales">
      <Section title="Éditeur du site">
        <p>Maître {CABINET.nom}</p>
        <p>Avocate inscrite au {CABINET.barreau} — Case 132</p>
        <p>{CABINET.adresse.join(' — ')}</p>
        <p>Téléphone : {CABINET.telephone}</p>
        <p>Email : <a href={`mailto:${CABINET.email}`} className={lien}>{CABINET.email}</a></p>
      </Section>

      <Section title="Hébergement">
        <p>Vercel Inc.</p>
        <p>340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis</p>
        <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={lien}>www.vercel.com</a></p>
      </Section>

      <Section title="Création">
        <p>TheOtter — <a href="https://www.theotter.fr" target="_blank" rel="noopener noreferrer" className={lien}>www.theotter.fr</a></p>
      </Section>

      <Section title="Propriété intellectuelle">
        <p>L&apos;ensemble du contenu de ce site (textes, visuels, logo, structure) est la propriété exclusive de Maître {CABINET.nom}, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.</p>
      </Section>

      <Section title="Responsabilité">
        <p>Les informations publiées sur ce site ont un caractère général et ne constituent pas un conseil juridique. Elles ne sauraient engager la responsabilité de l&apos;éditeur. Pour toute question relative à votre situation, il est recommandé de consulter un avocat.</p>
      </Section>

      <Section title="Données personnelles">
        <p>
          Les données transmises au cabinet par email ou par téléphone sont utilisées exclusivement pour répondre à votre demande. Pour en savoir plus et exercer vos droits, consultez la{' '}
          <a href="/politique-confidentialite" className={lien}>politique de confidentialité</a>.
        </p>
      </Section>
    </LegalPage>
  )
}
