function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-serif text-emerald-900">La Nostra Storia</h2>
        <p className="mt-4 text-emerald-900/80">
          Nato dall’idea dello chef <strong>Marco Venturi</strong>, il ristorante celebra i sapori toscani con tecniche moderne.
          La nostra filosofia unisce <em>stagionalità</em>, <em>qualità</em> e <em>ricerca estetica</em>, nel pieno rispetto del territorio.
        </p>
        <p className="mt-3 text-emerald-900/80">
          Marco ha trascorso 15 anni nei migliori ristoranti italiani, portando in cucina uno stile contemporaneo e autentico.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1659354218734-b449c0772316?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMzNjA3OTN8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Chef Marco Venturi" className="rounded-lg object-cover h-48 w-full" />
        <img src="https://images.unsplash.com/photo-1578366941741-9e517759c620?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWFtJTIwZGklMjBjdWNpbmF8ZW58MHwwfHx8MTc2MzM2MDc5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Team di cucina" className="rounded-lg object-cover h-48 w-full" />
        <img src="https://images.unsplash.com/photo-1604314325417-c021aacfc1c5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWxhJTIwZWxlZ2FudGV8ZW58MHwwfHx8MTc2MzM2MDc5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Sala elegante" className="rounded-lg object-cover h-48 w-full" />
        <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop" alt="Dettagli della mise en place" className="rounded-lg object-cover h-48 w-full" />
      </div>
    </section>
  )
}

export default About
