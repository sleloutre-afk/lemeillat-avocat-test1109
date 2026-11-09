import { Eyebrow, Orbit, SectionTitle, LogoMono } from './ui'
import { CABINET } from '@/lib/cabinet'

const MODALITES = ['Au cabinet', 'En visioconférence', 'Par téléphone']

function Icone({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-11 h-11 rounded-full bg-rose text-bordeaux flex items-center justify-center shrink-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
    </span>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-rose-pale">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-creme border border-ligne rounded-[24px] p-8 md:p-12">
            <Eyebrow>Coordonnées</Eyebrow>
            <SectionTitle>Parlons de votre projet</SectionTitle>
            <p className="text-[0.95rem] leading-[1.8] text-muted mt-5 mb-10">
              J&apos;interviens partout en France et à l&apos;international. Réponse rapide, premier échange pour cadrer votre besoin.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex gap-4 items-start">
                <Icone><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.9.6 2.8.7a2 2 0 011.7 2z" /></Icone>
                <span>
                  <span className="block text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-1">Téléphone</span>
                  <a href={CABINET.telephoneHref} className="text-[1rem] text-encre hover:text-bordeaux no-underline">{CABINET.telephone}</a>
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <Icone><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></Icone>
                <span>
                  <span className="block text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-1">Email</span>
                  <a href={`mailto:${CABINET.email}`} className="text-[1rem] text-encre hover:text-bordeaux no-underline break-all">{CABINET.email}</a>
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <Icone><path d="M12 22s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="10" r="2.5" /></Icone>
                <span>
                  <span className="block text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-1">Cabinet</span>
                  <span className="block text-[1rem] text-encre leading-snug">{CABINET.adresse[0]}<br />{CABINET.adresse[1]}</span>
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href={CABINET.telephoneHref} className="inline-flex items-center bg-bordeaux hover:bg-bordeaux-dark text-creme px-7 py-3.5 rounded-full text-[0.75rem] tracking-[0.14em] uppercase transition-colors no-underline">
                Appeler
              </a>
              <a href={`mailto:${CABINET.email}`} className="inline-flex items-center border border-bordeaux/40 hover:border-bordeaux text-bordeaux px-7 py-3.5 rounded-full text-[0.75rem] tracking-[0.14em] uppercase transition-colors no-underline">
                Écrire
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-bordeaux text-creme p-8 md:p-12 flex flex-col justify-between min-h-[360px]">
            <LogoMono size={340} className="absolute -right-16 -bottom-16 text-creme opacity-[0.08]" />
            <Orbit size={300} className="-top-28 -right-24" duree={30} />
            <div className="relative">
              <p className="text-[0.7rem] tracking-[0.22em] uppercase text-safran-pale mb-6">Consultations</p>
              <ul className="space-y-4">
                {MODALITES.map(m => (
                  <li key={m} className="font-serif text-[clamp(1.4rem,2.6vw,2rem)] leading-tight">{m}</li>
                ))}
              </ul>
            </div>
            <p className="relative text-[0.9rem] leading-relaxed text-rose/90 max-w-sm mt-10">
              Où que vous soyez, le même niveau d&apos;exigence et de disponibilité. Les rendez-vous sont fixés selon vos contraintes de dirigeant.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
