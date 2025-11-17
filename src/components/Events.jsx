function Events() {
  const events = [
    {
      title: 'Cena Degustazione d’Autunno',
      date: '10 Novembre',
      desc: 'Menù dedicato ai prodotti stagionali.'
    },
    {
      title: 'Serata Bollicine & Mare',
      date: '2 Dicembre',
      desc: 'Abbinamento crudi & spumanti italiani.'
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-serif text-emerald-900">Eventi & News</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {events.map((e) => (
          <div key={e.title} className="border border-emerald-100 rounded-xl p-6 bg-white">
            <div className="text-sm text-emerald-900/70">{e.date}</div>
            <h3 className="text-xl text-emerald-900 mt-1">{e.title}</h3>
            <p className="text-emerald-900/80 mt-2">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events
