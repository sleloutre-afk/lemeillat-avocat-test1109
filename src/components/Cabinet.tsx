import { Eyebrow, SectionTitle } from './ui'

const ENGAGEMENTS = [
  {
    titre: 'Exigence technique',
    texte: "Chaque dossier est traité avec rigueur et précision. Le perfectionnisme est une méthode : rien n'est laissé au hasard.",
  },
  {
    titre: 'Clarté & accessibilité',
    texte: 'Une avocate joignable, des réponses compréhensibles, sans jargon inutile. Vous savez toujours où en est votre dossier.',
  },
  {
    titre: 'Engagements tenus',
    texte: 'Les délais annoncés sont respectés, les points convenus sont traités. Ce qui est promis est fait.',
  },
  {
    titre: 'Tarifs transparents',
    texte: "Un forfait ou un devis avant toute intervention, une convention d'honoraires claire. Aucune mauvaise surprise.",
  },
  {
    titre: "Un regard de chef d'entreprise",
    texte: "Le droit au service de votre stratégie : une approche pragmatique qui intègre la dimension financière et le contexte de chaque client.",
  },
]

const PARCOURS = [
  { annee: 'Depuis 2019', texte: 'Fondatrice du cabinet — droit des affaires' },
  { annee: '2018', texte: "Prestation de serment, après le CAPA à l'École des avocats Aliénor (International Business, Trade & Tax Law)" },
  { annee: '2017', texte: 'Juriste en droit des sociétés — In Extenso' },
  { annee: '2016', texte: 'Juriste fiscaliste — Verspieren' },
  { annee: '2015', texte: 'Master 2 Droit des affaires — Université de La Réunion' },
]

export default function Cabinet() {
  return (
    <section id="cabinet" className="py-24 md:py-32 bg-creme">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20 items-start">
          <div className="relative max-w-[440px]">
            <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-safran" aria-hidden="true" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-rose" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/alix.webp" alt="Maître Alix Le Meillat, avocate en droit des affaires"
              className="relative w-full aspect-[4/5] object-cover rounded-[24px]" />
          </div>

          <div>
            <Eyebrow>Le cabinet</Eyebrow>
            <SectionTitle>Le droit des affaires,<br />avec une vision d&apos;entreprise</SectionTitle>
            <div className="w-10 h-[3px] rounded-full bg-safran my-8" />

            <div className="space-y-5 text-[0.97rem] leading-[1.85] text-muted">
              <p>
                Avocate en droit des affaires, Maître Alix Le Meillat accompagne les dirigeants et leurs entreprises dans les décisions qui engagent leur avenir : création, structuration, développement, transmission. Elle a fondé son cabinet en 2019.
              </p>
              <p>
                Son parcours lui a donné une double lecture, juridique et financière. Titulaire d&apos;un Master 2 en droit des affaires et formée au droit des affaires internationales et à la fiscalité, elle a exercé comme juriste fiscaliste chez Verspieren, puis en droit des sociétés au sein d&apos;In Extenso, aux côtés d&apos;experts-comptables.
              </p>
              <p>
                Cette expérience nourrit sa manière d&apos;exercer : un conseil technique et pointu, exprimé simplement, qui tient compte des enjeux économiques de chaque client. Elle intervient partout en France et à l&apos;international, au cabinet, en visioconférence ou par téléphone.
              </p>
            </div>

            <ol className="mt-10 border-l-2 border-ligne pl-6 space-y-4">
              {PARCOURS.map(p => (
                <li key={p.annee} className="relative">
                  <span className="absolute -left-[31px] top-[7px] w-2.5 h-2.5 rounded-full bg-safran ring-4 ring-creme" aria-hidden="true" />
                  <span className="block text-[0.65rem] tracking-[0.18em] uppercase text-bordeaux font-medium">{p.annee}</span>
                  <span className="block text-[0.9rem] text-encre leading-snug">{p.texte}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="font-serif text-[1.6rem] text-encre mb-10 text-center">Mes engagements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {ENGAGEMENTS.map((e, i) => (
              <div key={e.titre} className="bg-rose-pale border border-ligne rounded-[20px] p-6 hover:-translate-y-1 hover:border-safran hover:shadow-[0_12px_32px_rgba(140,59,68,0.10)] transition-all duration-200">
                <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full font-serif text-[0.95rem] mb-4 ${i % 2 ? 'bg-safran text-encre' : 'bg-bordeaux text-creme'}`}>{i + 1}</span>
                <h4 className="font-serif text-[1.08rem] text-encre mb-2 leading-snug">{e.titre}</h4>
                <p className="text-[0.85rem] leading-relaxed text-muted">{e.texte}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
