function Footer() {
  return (
    <footer className="mt-16 border-t border-emerald-100 bg-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4 text-emerald-900/80">
        <div className="md:col-span-2">
          <h3 className="text-lg font-serif text-emerald-900">La Terrazza del Gusto</h3>
          <p className="mt-2 text-sm">Ristorante di cucina italiana contemporanea con ingredienti locali, nel cuore di Firenze.</p>
          <p className="mt-3 text-sm">P.IVA 12345678900</p>
        </div>
        <div>
          <h4 className="font-semibold text-emerald-900">Link Rapidi</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/menu" className="hover:underline">Menu</a></li>
            <li><a href="/prenotazioni" className="hover:underline">Prenotazioni</a></li>
            <li><a href="/contatti" className="hover:underline">Contatti</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
            <li><a href="/cookie" className="hover:underline">Cookie</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-emerald-900">Seguici</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-emerald-900/60 pb-6">© {new Date().getFullYear()} La Terrazza del Gusto. Tutti i diritti riservati.</div>
    </footer>
  )
}

export default Footer
