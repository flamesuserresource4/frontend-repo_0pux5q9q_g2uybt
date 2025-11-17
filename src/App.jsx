import { useNavigate, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Menu from './components/Menu'
import Booking from './components/Booking'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Events from './components/Events'
import Footer from './components/Footer'
import SEO from './components/SEO'

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <SEO
        title="Ristorante La Terrazza del Gusto | Vista su Firenze | Cucina italiana moderna"
        description="Ristorante con vista panoramica a Firenze. Cucina italiana contemporanea con ingredienti locali. Prenota un tavolo o scopri il nostro menu."
        url={typeof window !== 'undefined' ? window.location.href : ''}
        keywords="ristorante vista Firenze, cucina italiana moderna Firenze, ristorante romantico Firenze"
      />
      <Hero onPrimary={() => navigate('/prenotazioni')} onSecondary={() => navigate('/menu')} />
      <Highlights />
      <About />
      <Menu />
      <Reviews />
      <Events />
    </>
  )
}

function ChiSiamo() {
  return (
    <>
      <SEO title="Chi Siamo | La Terrazza del Gusto" description="La storia dello chef Marco Venturi e la nostra filosofia: stagionalità, qualità, estetica." />
      <About />
    </>
  )
}

function MenuPage() {
  return (
    <>
      <SEO title="Menu | La Terrazza del Gusto" description="Antipasti, primi, secondi e dessert. Menu degustazione da 5 portate." />
      <Menu />
    </>
  )
}

function PrenotazioniPage() {
  return (
    <>
      <SEO title="Prenotazioni | La Terrazza del Gusto" description="Prenota un tavolo nel cuore di Firenze. Gruppi e ricorrenze benvenuti." />
      <Booking />
    </>
  )
}

function GalleriaPage() {
  return (
    <>
      <SEO title="Galleria | La Terrazza del Gusto" description="Scopri la nostra terrazza panoramica, la sala e i piatti iconici." />
      <Gallery />
    </>
  )
}

function RecensioniPage() {
  return (
    <>
      <SEO title="Recensioni | La Terrazza del Gusto" description="Cosa dicono i nostri ospiti: valutazione media 4.8/5 su oltre 320 recensioni." />
      <Reviews />
    </>
  )
}

function EventiPage() {
  return (
    <>
      <SEO title="Eventi & News | La Terrazza del Gusto" description="Cene degustazione, serate speciali e novità dalla nostra cucina." />
      <Events />
    </>
  )
}

function ContattiPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO title="Contatti & Come Arrivare | La Terrazza del Gusto" description="Indirizzo, telefono, email, mappa e informazioni utili per raggiungerci a Firenze." />
      <h2 className="text-3xl font-serif text-emerald-900">Contatti & Come Arrivare</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="space-y-3 text-emerald-900/80">
          <p><strong>Indirizzo:</strong> Via della Panorama 12, Firenze</p>
          <p><strong>Telefono:</strong> +39 055 1234567</p>
          <p><strong>Email:</strong> info@laterrazzadelgusto.it</p>
          <p><strong>Parcheggio:</strong> convenzionato a 200m</p>
          <p><strong>Accessibilità:</strong> struttura accessibile</p>
          <div className="mt-4">
            <h3 className="font-semibold text-emerald-900">Orari</h3>
            <p>Lun-Dom: 12:00–14:30 / 19:00–23:00</p>
          </div>
        </div>
        <div>
          <iframe
            title="Mappa Firenze"
            src="https://www.google.com/maps?q=Firenze&output=embed"
            className="w-full h-64 rounded-lg border border-emerald-100"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-amber-50/40 to-white text-emerald-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/prenotazioni" element={<PrenotazioniPage />} />
        <Route path="/galleria" element={<GalleriaPage />} />
        <Route path="/recensioni" element={<RecensioniPage />} />
        <Route path="/eventi" element={<EventiPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
