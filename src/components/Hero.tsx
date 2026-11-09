import { Logo, Orbit, Rays } from './ui'
import { CABINET } from '@/lib/cabinet'

const FAITS = [
  { valeur: 'Conseil', label: 'Droit des affaires' },
  { valeur: 'France', label: '& international' },
  { valeur: `Depuis ${CABINET.serment}`, label: 'Avocate' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-rose-pale">
      {/* Image provisoire, éclaircie pour rester dans des tons pâles */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero.webp" alt="" aria-hidden="true" className="ken-burns absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(253,250,248,0.90) 0%, rgba(253,250,248,0.72) 48%, rgba(250,243,241,0.40) 100%)' }} />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-rose blur-3xl opacity-70" aria-hidden="true" />
      <div className="absolute -bottom-40 left-1/3 w-[420px] h-[420px] rounded-full bg-safran-pale blur-3xl opacity-80" aria-hidden="true" />
      <Orbit size={520} className="-right-56 -bottom-48 lg:hidden" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-20 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <p className="flex items-center gap-3 text-[0.72rem] tracking-[0.24em] uppercase text-bordeaux font-medium mb-6">
            <Rays className="text-safran" />
            {CABINET.titre}
          </p>
          <h1 className="font-serif font-normal text-encre text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.05] mb-6">
            Maître<br />
            <span className="text-bordeaux">Alix Le Meillat</span>
          </h1>
          <p className="font-serif text-[clamp(1.15rem,2vw,1.45rem)] text-ardoise leading-snug mb-4 max-w-xl">
            Un conseil juridique pointu, exprimé clairement, au service de la réalité de votre entreprise.
          </p>
          <p className="text-[0.95rem] text-muted leading-relaxed mb-10 max-w-xl">
            Droit des sociétés, contrats commerciaux, opérations sur le capital, transmission : j&apos;accompagne les dirigeants et leurs entreprises partout en France et à l&apos;international.
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            <a href="#contact" className="inline-flex items-center bg-bordeaux hover:bg-bordeaux-dark text-creme px-7 py-3.5 rounded-full text-[0.75rem] tracking-[0.14em] uppercase transition-colors no-underline">
              Prendre rendez-vous
            </a>
            <a href="#interventions" className="inline-flex items-center border border-bordeaux/40 hover:border-bordeaux text-bordeaux px-7 py-3.5 rounded-full text-[0.75rem] tracking-[0.14em] uppercase transition-colors no-underline">
              Nos interventions
            </a>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {FAITS.map(f => (
              <div key={f.label}>
                <p className="font-serif text-[1.25rem] text-encre italic">{f.valeur}</p>
                <p className="text-[0.62rem] tracking-[0.18em] uppercase text-muted mt-0.5">{f.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative flex items-center justify-center w-[440px] h-[440px]">
            <Orbit size={500} className="left-1/2 top-1/2 -ml-[250px] -mt-[250px]" />
            <Orbit size={400} ton="bordeaux" dashed reverse duree={55} point={7} className="left-1/2 top-1/2 -ml-[200px] -mt-[200px]" />
            <span className="absolute -right-2 bottom-10 w-14 h-14 rounded-full bg-safran/90" aria-hidden="true" />
            <span className="absolute left-4 top-6 w-6 h-6 rounded-full bg-bordeaux/80" aria-hidden="true" />
            <Logo size={340} className="relative" />
          </div>
        </div>
      </div>
    </section>
  )
}
