import Link from 'next/link'
import { Eyebrow, SectionTitle } from './ui'
import { ARTICLES } from '@/lib/articles'

export default function Publications() {
  return (
    <section id="publications" className="py-24 md:py-32 bg-creme">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-3xl mb-12">
          <Eyebrow>Publications</Eyebrow>
          <SectionTitle>Éclairages en droit des affaires</SectionTitle>
          <p className="text-[0.97rem] leading-[1.85] text-muted mt-6">
            Des repères concrets pour les dirigeants, sur les questions qui reviennent le plus souvent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {ARTICLES.map(a => (
            <Link key={a.slug} href={`/publications/${a.slug}`}
              className="group bg-rose-pale border border-ligne rounded-[20px] p-7 flex flex-col no-underline hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(140,59,68,0.10)] transition-all duration-200">
              <span className="text-[0.65rem] tracking-[0.18em] uppercase text-bordeaux font-medium mb-3">{a.date}</span>
              <h3 className="font-serif text-[1.2rem] text-encre leading-snug mb-3">{a.title}</h3>
              <p className="text-[0.86rem] leading-relaxed text-muted flex-1 mb-6">{a.excerpt}</p>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-bordeaux">
                Lire la publication <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
