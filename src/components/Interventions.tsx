'use client'
import { useEffect, useRef, useState } from 'react'
import { Eyebrow, SectionTitle } from './ui'

type Besoin = {
  titre: string
  accroche: string
  reponses: string[]
  domaines: string[]
}

const BESOINS: Besoin[] = [
  {
    titre: 'Je crée mon entreprise',
    accroche: 'Poser des bases solides dès le départ.',
    reponses: [
      'Quelle forme juridique choisir : SAS, SARL, SCI… ?',
      'Rédiger des statuts adaptés à votre projet',
      'Organiser les relations entre associés grâce au pacte d\'associés',
      'Choisir le statut du dirigeant et en mesurer les incidences sociales et fiscales',
      'Réaliser les formalités d\'immatriculation',
    ],
    domaines: ['Droit des sociétés', 'Fiscalité de l\'entreprise'],
  },
  {
    titre: 'Je gère ma société au quotidien',
    accroche: 'Sécuriser chaque décision de la vie sociale.',
    reponses: [
      'Approbation annuelle des comptes et assemblées générales',
      'Secrétariat juridique : procès-verbaux, registres, dépôts',
      'Nomination, rémunération ou révocation d\'un dirigeant',
      'Transfert de siège, changement d\'objet ou de dénomination',
      'Mise à jour des statuts',
    ],
    domaines: ['Droit des sociétés'],
  },
  {
    titre: 'J\'accueille un associé ou je lève des fonds',
    accroche: 'Faire grandir votre société sans en perdre la maîtrise.',
    reponses: [
      'Augmentation de capital et entrée de nouveaux associés',
      'Cession de parts sociales ou d\'actions',
      'Pacte d\'associés, clauses d\'agrément et de préemption',
      'Valeurs mobilières : BSA, BSPCE, actions de préférence',
      'Transformation, fusion, restructuration de groupe',
    ],
    domaines: ['Droit des sociétés', 'Opérations sur le capital'],
  },
  {
    titre: 'Je contracte avec mes clients et partenaires',
    accroche: 'Des contrats qui protègent votre activité.',
    reponses: [
      'Conditions générales de vente et d\'utilisation',
      'Contrats commerciaux : prestation de services, distribution, franchise, sous-traitance',
      'Accords de partenariat et de confidentialité',
      'Relecture et négociation des contrats proposés par vos partenaires',
      'Baux commerciaux',
    ],
    domaines: ['Droit commercial', 'Droit des contrats'],
  },
  {
    titre: 'Je me développe à l\'international',
    accroche: 'Sécuriser vos opérations au-delà des frontières.',
    reponses: [
      'Contrats internationaux : loi applicable, juridiction compétente, clause d\'arbitrage',
      'Relations avec des fournisseurs, distributeurs ou clients étrangers',
      'Implantation d\'une filiale ou d\'un établissement',
      'Accompagnement à distance des dirigeants établis hors de France',
    ],
    domaines: ['Droit des affaires international', 'Droit commercial'],
  },
  {
    titre: 'Je vends ou je transmets mon entreprise',
    accroche: 'Préparer la sortie pour en maîtriser les conditions.',
    reponses: [
      'Cession de titres ou de fonds de commerce',
      'Audit juridique préalable',
      'Protocole de cession et garantie d\'actif et de passif',
      'Transmission familiale ou à un repreneur',
      'Dissolution et liquidation amiable',
    ],
    domaines: ['Droit des sociétés', 'Droit commercial'],
  },
  {
    titre: 'Je fais face à un différend',
    accroche: 'Défendre vos intérêts en privilégiant l\'issue la plus efficace.',
    reponses: [
      'Analyse de la situation et définition d\'une stratégie',
      'Négociation amiable et médiation',
      'Litiges commerciaux et contractuels',
      'Conflits entre associés ou avec un dirigeant',
      'Représentation devant les juridictions commerciales et civiles',
    ],
    domaines: ['Contentieux des affaires'],
  },
]

const DOMAINES = ['Droit des affaires', 'Droit des sociétés', 'Droit commercial', 'Droit des contrats', 'International']

function Detail({ b }: { b: Besoin }) {
  return (
    <div>
      <p className="font-serif text-[1.25rem] text-bordeaux mb-5 italic">{b.accroche}</p>
      <ul className="space-y-3 mb-7">
        {b.reponses.map(r => (
          <li key={r} className="flex gap-3 text-[0.93rem] text-encre leading-relaxed">
            <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-safran shrink-0" aria-hidden="true" />
            {r}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {b.domaines.map(d => (
          <span key={d} className="text-[0.68rem] tracking-[0.08em] uppercase text-bordeaux bg-rose px-3 py-1.5 rounded-full">{d}</span>
        ))}
      </div>
    </div>
  )
}

export default function Interventions() {
  const [actif, setActif] = useState(0)

  // Survol : léger délai avant de changer le panneau (comme Teledok), annulé si la souris repart
  const timer = useRef<number | undefined>(undefined)
  const annuler = () => window.clearTimeout(timer.current)
  const survoler = (e: React.PointerEvent, i: number) => {
    if (e.pointerType !== 'mouse') return
    annuler()
    timer.current = window.setTimeout(() => setActif(i), 150)
  }
  useEffect(() => annuler, [])

  return (
    <section id="interventions" className="py-24 md:py-32 bg-rose-pale">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-3xl mb-12">
          <Eyebrow>Nos interventions</Eyebrow>
          <SectionTitle>Partir de votre besoin,<br />pas du code</SectionTitle>
          <p className="text-[0.97rem] leading-[1.85] text-muted mt-6">
            Vous n&apos;avez pas à savoir quelle branche du droit s&apos;applique à votre situation. Dites-moi ce que vous vivez : je vous apporte une réponse adaptée, en droit des affaires, avec une priorité donnée au conseil et à l&apos;anticipation.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {DOMAINES.map(d => (
              <span key={d} className="text-[0.7rem] tracking-[0.08em] uppercase text-ardoise border border-ligne bg-creme px-3 py-1.5 rounded-full">{d}</span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
          <div className="flex flex-col gap-2.5" role="tablist" aria-label="Besoins">
            {BESOINS.map((b, i) => {
              const on = i === actif
              return (
                <div key={b.titre}>
                  <button role="tab" aria-selected={on} onClick={() => { annuler(); setActif(i) }} onPointerEnter={e => survoler(e, i)} onPointerLeave={annuler} onFocus={() => setActif(i)}
                    className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all cursor-pointer ${on ? 'bg-bordeaux border-bordeaux text-creme shadow-[0_10px_30px_rgba(140,59,68,0.25)]' : 'bg-creme border-ligne text-encre hover:border-bordeaux-light'}`}>
                    <span className={`font-serif text-[0.9rem] w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${on ? 'bg-safran text-encre' : 'bg-rose text-bordeaux'}`}>{i + 1}</span>
                    <span className="font-serif text-[1.08rem] leading-snug flex-1">{b.titre}</span>
                    <span className={`text-lg transition-transform ${on ? 'translate-x-1' : 'opacity-40'}`} aria-hidden="true">→</span>
                  </button>
                  {/* Mobile : le détail s'ouvre sous le besoin sélectionné */}
                  {on && (
                    <div className="lg:hidden bg-creme border border-ligne rounded-2xl p-6 mt-2.5">
                      <Detail b={b} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="hidden lg:block sticky top-28 bg-creme border border-ligne rounded-[24px] p-10 shadow-[0_20px_60px_rgba(140,59,68,0.08)]" role="tabpanel">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-2">Ce que je fais pour vous</p>
            <div key={actif} className="fade-in">
              <h3 className="font-serif text-[1.7rem] text-encre leading-tight mb-4">{BESOINS[actif].titre}</h3>
              <Detail b={BESOINS[actif]} />
            </div>
            <a href="#contact" className="inline-flex mt-9 items-center bg-bordeaux hover:bg-bordeaux-dark text-creme px-6 py-3 rounded-full text-[0.72rem] tracking-[0.14em] uppercase transition-colors no-underline">
              En parler ensemble
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
