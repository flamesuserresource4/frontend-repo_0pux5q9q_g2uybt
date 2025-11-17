function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1723321025420-5af28984cd42?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWaXN0YSUyMHBhbm9yYW1pY2ElMjBkZWwlMjBsb2NhbGV8ZW58MHwwfHx8MTc2MzM2MDc5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Vista panoramica del locale' },
    { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop', alt: 'Sala interna luminosa' },
    { src: 'https://images.unsplash.com/photo-1723321025420-5af28984cd42?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWaXN0YSUyMHBhbm9yYW1pY2ElMjBkZWwlMjBsb2NhbGV8ZW58MHwwfHx8MTc2MzM2MDc5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Dettagli della mise en place' },
    { src: 'https://images.unsplash.com/photo-1723321025420-5af28984cd42?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWaXN0YSUyMHBhbm9yYW1pY2ElMjBkZWwlMjBsb2NhbGV8ZW58MHwwfHx8MTc2MzM2MDc5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Piatto principale contemporaneo' },
    { src: 'https://images.unsplash.com/photo-1723321025420-5af28984cd42?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWaXN0YSUyMHBhbm9yYW1pY2ElMjBkZWwlMjBsb2NhbGV8ZW58MHwwfHx8MTc2MzM2MDc5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Team di cucina al lavoro' },
    { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop', alt: 'Terrazza esterna con vista' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-serif text-emerald-900">Galleria</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <img key={idx} src={img.src} alt={img.alt} className="rounded-lg object-cover w-full h-56" />
        ))}
      </div>
    </section>
  )
}

export default Gallery
