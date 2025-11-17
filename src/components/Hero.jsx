function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1920&auto=format&fit=crop"
          alt="Vista panoramica su Firenze al tramonto"
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[70vh] flex items-end pb-14">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-serif font-semibold leading-tight">
            La Terrazza del Gusto – Un’esperienza culinaria moderna affacciata su Firenze.
          </h1>
          <p className="mt-4 text-lg text-emerald-50">
            Ingredienti locali, cucina creativa, atmosfera unica.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onPrimary} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-md">
              Prenota un Tavolo
            </button>
            <button onClick={onSecondary} className="bg-white/90 hover:bg-white text-emerald-800 px-5 py-2.5 rounded-md">
              Guarda il Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
