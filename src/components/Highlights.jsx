function Highlights() {
  const items = [
    { title: 'Ingredienti a km 0', desc: 'Selezioniamo solo prodotti freschi del territorio toscano.' },
    { title: 'Chef pluripremiato', desc: 'La cucina di Marco Venturi con 15 anni di esperienza nei migliori ristoranti.' },
    { title: 'Vista panoramica', desc: 'Una terrazza con affaccio unico sulla città di Firenze.' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="bg-white border border-emerald-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-emerald-900 font-semibold">{it.title}</h3>
            <p className="text-emerald-900/80 mt-2 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Highlights
