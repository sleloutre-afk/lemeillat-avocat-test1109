import Link from 'next/link'
import { LogoMono } from './ui'
import { CABINET, NAV } from '@/lib/cabinet'

export default function Footer() {
  return (
    <footer className="bg-encre text-creme/70 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoMono size={44} className="text-rose" />
              <span>
                <span className="block font-serif text-[1.05rem] text-creme">{CABINET.nom}</span>
                <span className="block text-[0.6rem] tracking-[0.18em] uppercase text-bordeaux-light">{CABINET.titre}</span>
              </span>
            </div>
            <p className="text-[0.85rem] leading-relaxed text-creme/50 max-w-xs">
              Conseil et accompagnement des entreprises et de leurs dirigeants, en France et à l&apos;international.
            </p>
          </div>

          <div>
            <p className="text-[0.62rem] tracking-[0.2em] uppercase text-creme/40 mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV.map(({ href, label }) => (
                <li key={href}><Link href={href} className="text-[0.87rem] text-creme/65 hover:text-creme no-underline">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.62rem] tracking-[0.2em] uppercase text-creme/40 mb-4">Coordonnées</p>
            <p className="text-[0.87rem] leading-relaxed text-creme/65">
              {CABINET.adresse[0]}<br />{CABINET.adresse[1]}<br />
              <a href={CABINET.telephoneHref} className="text-creme/65 hover:text-creme no-underline">{CABINET.telephone}</a><br />
              <a href={`mailto:${CABINET.email}`} className="text-creme/65 hover:text-creme no-underline">{CABINET.email}</a>
            </p>
          </div>
        </div>

        <div className="border-t border-creme/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-[0.72rem] text-creme/40">
          <p>&copy; {new Date().getFullYear()} Maître {CABINET.nom} — Avocate au {CABINET.barreau}</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/mentions-legales" className="text-creme/40 hover:text-creme no-underline">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="text-creme/40 hover:text-creme no-underline">Politique de confidentialité</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
