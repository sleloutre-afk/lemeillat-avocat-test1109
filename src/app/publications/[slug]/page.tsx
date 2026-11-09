import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Rays } from '@/components/ui'
import { ARTICLES, getArticle } from '@/lib/articles'
import { CABINET } from '@/lib/cabinet'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug)
  if (!article) return {}
  return {
    title: `${article.title} — Maître ${CABINET.nom}`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug)
  if (!article) notFound()

  const autres = ARTICLES.filter(a => a.slug !== article.slug)

  return (
    <>
      <Navbar solid />
      <main className="bg-creme min-h-screen">
        <div className="bg-rose-pale border-b border-ligne pt-36 pb-14">
          <div className="max-w-3xl mx-auto px-6">
            <Link href="/#publications" className="text-[0.7rem] tracking-[0.14em] uppercase text-bordeaux no-underline">
              ← Publications
            </Link>
            <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.2em] uppercase text-muted mt-8 mb-3">
              <Rays className="text-bordeaux" />
              {article.date}
            </p>
            <h1 className="font-serif font-normal text-encre text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.15]">
              {article.title}
            </h1>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 py-14">
          <p className="font-serif text-[1.2rem] leading-relaxed text-ardoise mb-10">{article.excerpt}</p>
          <div className="article-body text-[0.98rem] leading-[1.9] text-muted" dangerouslySetInnerHTML={{ __html: article.content }} />

          <div className="mt-14 bg-rose-pale border border-ligne rounded-[20px] p-8">
            <p className="font-serif text-[1.25rem] text-encre mb-2">Une question sur votre situation ?</p>
            <p className="text-[0.9rem] text-muted mb-6">Chaque dossier est unique. Échangeons sur votre projet.</p>
            <Link href="/#contact" className="inline-flex items-center bg-bordeaux hover:bg-bordeaux-dark text-creme px-6 py-3 rounded-full text-[0.72rem] tracking-[0.14em] uppercase transition-colors no-underline">
              Prendre contact
            </Link>
          </div>

          {autres.length > 0 && (
            <div className="mt-14">
              <p className="text-[0.68rem] tracking-[0.2em] uppercase text-muted mb-5">À lire aussi</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {autres.map(a => (
                  <Link key={a.slug} href={`/publications/${a.slug}`} className="block border border-ligne rounded-2xl p-5 no-underline hover:border-bordeaux-light transition-colors">
                    <span className="font-serif text-[1.02rem] text-encre leading-snug">{a.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}
