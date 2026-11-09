// Petits éléments partagés : motif « rayons » repris du logo, intitulés de section, logo

export function Rays({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
      <path d="M4 12 L2 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M11 11 L11 2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M18 12 L20 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[0.7rem] tracking-[0.22em] uppercase font-medium mb-4 ${light ? 'text-rose' : 'text-bordeaux'}`}>
      <Rays className="text-safran" />
      {children}
    </p>
  )
}

export function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`font-serif font-normal text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.15] ${light ? 'text-creme' : 'text-encre'}`}>
      {children}
    </h2>
  )
}

/** Logo couleur (PNG détouré) */
export function Logo({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.png" alt="Logo du cabinet Le Meillat" width={size} height={Math.round(size * 735 / 843)} className={className} />
  )
}

/** Logo monochrome (SVG utilisé comme masque, prend la couleur du texte) */
export function LogoMono({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-block bg-current ${className}`}
      style={{ width: size, height: Math.round(size * 1563 / 1800), WebkitMask: 'url(/logo.svg) center / contain no-repeat', mask: 'url(/logo.svg) center / contain no-repeat' }} />
  )
}

/** Cercle décoratif fin avec un point en orbite (inspiré de Teledok) */
const TONS = {
  safran: { trait: 'border-safran/70', point: 'bg-safran' },
  bordeaux: { trait: 'border-bordeaux-light/35', point: 'bg-bordeaux-light' },
  creme: { trait: 'border-creme/25', point: 'bg-safran' },
}
export function Orbit({ size, className = '', ton = 'safran', dashed = false, reverse = false, duree = 40, point = 10 }: {
  size: number; className?: string; ton?: keyof typeof TONS; dashed?: boolean; reverse?: boolean; duree?: number; point?: number | false
}) {
  const t = TONS[ton]
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`} style={{ width: size, height: size }}>
      <div className={`absolute inset-0 rounded-full border ${dashed ? 'border-dashed' : ''} ${t.trait}`} />
      {point !== false && (
        <div className="orbit absolute inset-0" style={{ animationDuration: `${duree}s`, animationDirection: reverse ? 'reverse' : 'normal' }}>
          <span className={`absolute left-1/2 rounded-full ${t.point}`} style={{ width: point, height: point, top: -point / 2, marginLeft: -point / 2 }} />
        </div>
      )}
    </div>
  )
}
