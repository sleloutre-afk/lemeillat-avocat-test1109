import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Cabinet from '@/components/Cabinet'
import Interventions from '@/components/Interventions'
import Avis from '@/components/Avis'
import Honoraires from '@/components/Honoraires'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cabinet />
        <Interventions />
        <Avis />
        <Honoraires />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
