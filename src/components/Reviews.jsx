function Reviews() {
  const rating = 4.8
  const count = 320
  const reviews = [
    { text: 'Esperienza indimenticabile! Vista stupenda e piatti deliziosi.', author: 'Laura B.' },
    { text: 'Cucina moderna che valorizza i sapori toscani. Consigliatissimo!', author: 'Matteo R.' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white border border-emerald-100 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-serif text-emerald-900">Recensioni</h2>
            <p className="text-emerald-900/80 mt-2">⭐ {rating} / 5 – {count}+ recensioni</p>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <blockquote key={i} className="border border-emerald-100 rounded-lg p-4 bg-emerald-50/40">
              <p className="text-emerald-900/90">“{r.text}”</p>
              <footer className="mt-2 text-sm text-emerald-900/70">– {r.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
