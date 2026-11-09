import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import { Rays } from './ui'

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-[1.2rem] text-encre mb-3">{title}</h2>
      <div className="text-[0.92rem] leading-[1.85] text-muted space-y-2">{children}</div>
    </section>
  )
}

export default function LegalPage({ surtitre, titre, children }: { surtitre: string; titre: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar solid />
      <main className="bg-creme min-h-screen pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase text-bordeaux mb-4">
            <Rays className="text-safran" />
            {surtitre}
          </p>
          <h1 className="font-serif font-normal text-encre text-[clamp(1.9rem,4vw,2.6rem)] leading-tight mb-14">{titre}</h1>
          {children}
          <div className="mt-12 pt-8 border-t border-ligne">
            <Link href="/" className="text-[0.7rem] tracking-[0.12em] uppercase text-bordeaux no-underline">← Retour au site</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
