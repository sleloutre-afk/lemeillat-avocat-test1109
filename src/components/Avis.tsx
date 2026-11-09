import { Eyebrow, SectionTitle } from './ui'
import { AVIS, GOOGLE } from '@/lib/avis'

function Etoiles({ size = 16 }: { size?: number }) {
  return (
    <span className="inline-flex gap-0.5 text-safran" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  )
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.2-.1-2.4-.4-3.5z" />
    </svg>
  )
}

export default function Avis() {
  return (
    <section id="avis" className="py-24 md:py-32 bg-creme">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
          <div>
            <Eyebrow>Avis clients</Eyebrow>
            <SectionTitle>Ils m&apos;ont fait confiance</SectionTitle>
          </div>
          <div className="flex items-center gap-4 bg-rose-pale border border-ligne rounded-2xl px-6 py-4">
            <GoogleG />
            <div>
              <p className="flex items-center gap-2">
                <span className="font-serif text-[1.6rem] text-encre leading-none">{GOOGLE.note.toFixed(1).replace('.', ',')}</span>
                <Etoiles />
              </p>
              <p className="text-[0.72rem] text-muted mt-1">
                Note moyenne sur Google{GOOGLE.nombre > 0 && ` · ${GOOGLE.nombre} avis`}
              </p>
            </div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {AVIS.map((a, i) => (
            <figure key={i} className="m-0 mb-5 break-inside-avoid bg-rose-pale border border-ligne rounded-[20px] p-7">
              <Etoiles size={14} />
              {a.titre && <p className="font-serif text-[1.05rem] text-encre mt-4 leading-snug">{a.titre}</p>}
              <blockquote className="m-0 mt-3 mb-6 text-[0.92rem] leading-relaxed text-encre">
                « {a.texte} »
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className={`w-9 h-9 rounded-full flex items-center justify-center font-serif ${['bg-bordeaux text-creme', 'bg-safran text-encre', 'bg-bordeaux-light text-creme'][i % 3]}`}>{a.auteur.charAt(0)}</span>
                <span>
                  <span className="block text-[0.85rem] text-encre font-medium">{a.auteur}</span>
                  {a.date && <span className="block text-[0.72rem] text-muted">{a.date}</span>}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={GOOGLE.url || '#avis'} target={GOOGLE.url ? '_blank' : undefined} rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-bordeaux/40 hover:border-bordeaux text-bordeaux px-7 py-3.5 rounded-full text-[0.75rem] tracking-[0.14em] uppercase transition-colors no-underline">
            Voir tous les avis Google →
          </a>
        </div>

      </div>
    </section>
  )
}
