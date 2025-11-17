function Menu() {
  const sections = [
    {
      name: 'Antipasti',
      items: [
        { name: 'Carpaccio di Manzo Toscano', desc: 'pecorino stagionato, crema di rucola.' },
        { name: 'Crostini della Terrazza', desc: 'selezione di creme e salse della casa.' },
      ],
    },
    {
      name: 'Primi',
      items: [
        { name: 'Tagliolini al Limone e Gamberi Rossi', desc: 'zest di limone, olio al basilico.' },
        { name: 'Risotto allo Zafferano Toscano', desc: 'mantecato al pecorino, polvere di olive.' },
      ],
    },
    {
      name: 'Secondi',
      items: [
        { name: 'Filetto di Manzo alla Griglia', desc: 'salsa al Chianti, verdure grigliate.' },
        { name: 'Branzino in Crosta di Erbe', desc: 'crema di topinambur, chips di porro.' },
      ],
    },
    {
      name: 'Dessert',
      items: [
        { name: 'Tiramisù Scomposto', desc: 'crema al mascarpone, crumble al caffè.' },
        { name: 'Crostata al Limone', desc: 'meringa fiammeggiata.' },
      ],
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif text-emerald-900">Il Menu</h2>
          {sections.map((s) => (
            <div key={s.name} className="mt-8">
              <h3 className="text-xl font-semibold text-emerald-900">{s.name}</h3>
              <ul className="mt-4 space-y-3">
                {s.items.map((i) => (
                  <li key={i.name} className="flex justify-between gap-4 border-b border-emerald-100 pb-3">
                    <div>
                      <p className="text-emerald-900">{i.name}</p>
                      <p className="text-sm text-emerald-900/70">{i.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-10 p-6 bg-emerald-50 border border-emerald-100 rounded-xl">
            <h3 className="text-xl font-semibold text-emerald-900">Menu Degustazione</h3>
            <p className="text-emerald-900/80 mt-2">Degustazione da 5 portate | 65€</p>
          </div>
        </div>
        <aside>
          <div className="sticky top-24">
            <h4 className="text-xl font-serif text-emerald-900">Carta dei Vini</h4>
            <p className="text-emerald-900/80 mt-2">Selezione di vini toscani, rossi strutturati, bianchi aromatici, bollicine italiane.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Menu
