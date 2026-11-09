import { Eyebrow, Orbit, SectionTitle } from './ui'
import { CABINET } from '@/lib/cabinet'

const CONSULTATIONS = [
  { label: 'Consultation au cabinet', duree: '60 min', prix: '150 € TTC' },
  { label: 'Consultation en visio', duree: '45 min', prix: '90 € TTC' },
  { label: 'Consultation par téléphone', duree: '45 min', prix: '90 € TTC' },
  { label: 'Question simple par écrit', duree: '', prix: '60 € TTC' },
]

const MODES = [
  {
    titre: 'Forfait',
    texte: "Pour les prestations de conseil bien délimitées : création de société, rédaction de statuts ou d'un pacte d'associés, approbation des comptes, rédaction d'un contrat. Le prix est fixé et communiqué avant toute intervention.",
  },
  {
    titre: 'Temps passé',
    texte: "Pour les missions dont l'étendue n'est pas connue à l'avance, notamment en contentieux. Un devis estimatif est remis au départ et actualisé à chaque étape significative.",
  },
]

export default function Honoraires() {
  return (
    <section id="honoraires" className="relative overflow-hidden py-24 md:py-32 bg-rose-pale">
      <Orbit size={420} className="-left-48 -bottom-40" duree={50} />
      <div className="relative max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <div>
            <Eyebrow>Honoraires</Eyebrow>
            <SectionTitle>Des honoraires annoncés,<br />jamais découverts</SectionTitle>
            <p className="text-[0.97rem] leading-[1.85] text-muted mt-6 mb-8">
              Une convention d&apos;honoraires est systématiquement signée avant toute intervention. Le mode de facturation et le montant prévisionnel sont définis ensemble, sans ambiguïté.
            </p>
            <div className="space-y-6">
              {MODES.map(m => (
                <div key={m.titre} className="border-l-[3px] border-safran pl-5">
                  <h3 className="font-serif text-[1.15rem] text-encre mb-1.5">{m.titre}</h3>
                  <p className="text-[0.88rem] leading-relaxed text-muted">{m.texte}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-creme border border-ligne rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(140,59,68,0.08)]">
            <h3 className="font-serif text-[1.4rem] text-encre mb-2">Consultations</h3>
            <p className="text-[0.85rem] text-muted mb-6">Un premier échange pour faire le point sur votre situation et vos options.</p>
            <ul className="divide-y divide-ligne">
              {CONSULTATIONS.map(c => (
                <li key={c.label} className="flex items-baseline justify-between gap-4 py-4">
                  <span>
                    <span className="block text-[0.95rem] text-encre">{c.label}</span>
                    {c.duree && <span className="block text-[0.75rem] text-muted">{c.duree}</span>}
                  </span>
                  <span className="font-serif text-[1.2rem] text-bordeaux whitespace-nowrap">{c.prix}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={CABINET.telephoneHref} className="inline-flex items-center bg-bordeaux hover:bg-bordeaux-dark text-creme px-6 py-3 rounded-full text-[0.72rem] tracking-[0.14em] uppercase transition-colors no-underline">
                Appeler
              </a>
              <a href={`mailto:${CABINET.email}`} className="inline-flex items-center border border-bordeaux/40 hover:border-bordeaux text-bordeaux px-6 py-3 rounded-full text-[0.72rem] tracking-[0.14em] uppercase transition-colors no-underline">
                Demander un devis
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
