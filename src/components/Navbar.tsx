'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from './ui'
import { CABINET, NAV } from '@/lib/cabinet'

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const filled = solid || scrolled || open

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${filled ? 'bg-creme/95 backdrop-blur-md shadow-[0_1px_20px_rgba(140,59,68,0.08)]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Logo size={46} />
          <span>
            <span className="block font-serif text-[1.05rem] text-encre leading-tight">{CABINET.nom}</span>
            <span className="block text-[0.6rem] tracking-[0.18em] uppercase text-bordeaux">{CABINET.titre}</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href} className="text-[0.72rem] tracking-[0.12em] uppercase text-encre hover:text-bordeaux transition-colors no-underline">
              {label}
            </Link>
          ))}
          <a href={CABINET.telephoneHref} className="text-[0.72rem] tracking-[0.1em] bg-bordeaux hover:bg-bordeaux-dark text-creme px-5 py-2.5 rounded-full transition-colors no-underline whitespace-nowrap">
            {CABINET.telephone}
          </a>
        </div>

        <button className="flex lg:hidden flex-col gap-[5px] p-2 bg-transparent border-0 cursor-pointer"
          onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {[0, 1, 2].map(i => (
            <span key={i} className="block w-[22px] h-[1.5px] bg-encre transition-all duration-200"
              style={{
                transform: i === 0 && open ? 'rotate(45deg) translate(4px,4px)' : i === 2 && open ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
                opacity: i === 1 && open ? 0 : 1,
              }} />
          ))}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-creme px-6 pb-6 border-t border-ligne">
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block py-3 text-[0.78rem] tracking-[0.12em] uppercase text-encre border-b border-ligne no-underline">
              {label}
            </Link>
          ))}
          <a href={CABINET.telephoneHref} onClick={() => setOpen(false)}
            className="block mt-4 py-3 text-center text-[0.78rem] tracking-[0.12em] uppercase bg-bordeaux text-creme rounded-full no-underline">
            {CABINET.telephone}
          </a>
        </div>
      )}
    </nav>
  )
}
