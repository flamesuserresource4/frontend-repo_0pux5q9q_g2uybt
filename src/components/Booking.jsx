import { useState } from 'react'

function Booking() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch(`${baseUrl}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: payload.nome,
          cognome: payload.cognome,
          email: payload.email,
          telefono: payload.telefono,
          data: payload.data,
          ora: payload.ora,
          persone: Number(payload.persone),
          note: payload.note || undefined,
          consensi_marketing: Boolean(payload.consensi_marketing),
        }),
      })

      if (!res.ok) throw new Error(await res.text())
      setStatus({ type: 'success', message: 'Prenotazione inviata con successo. Ti contatteremo a breve.' })
      e.target.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'Si è verificato un problema. Riprova tra poco.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-serif text-emerald-900">Prenota un Tavolo</h2>
      <p className="text-emerald-900/80 mt-2">Per gruppi e ricorrenze speciali, indicarlo nelle note. Politiche: prenotazione garantita fino a 15 minuti dall'orario scelto.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border border-emerald-100 rounded-xl p-6">
        <div>
          <label className="block text-sm text-emerald-900/80">Nome</label>
          <input name="nome" required className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-emerald-900/80">Cognome</label>
          <input name="cognome" required className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-emerald-900/80">Email</label>
          <input type="email" name="email" required className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-emerald-900/80">Telefono</label>
          <input name="telefono" required className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-emerald-900/80">Data</label>
          <input type="date" name="data" required className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-emerald-900/80">Ora</label>
          <input type="time" name="ora" required className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-emerald-900/80">Numero di Persone</label>
          <input type="number" name="persone" min="1" max="20" required className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-emerald-900/80">Note</label>
          <textarea name="note" rows="3" className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2" />
        </div>
        <div className="md:col-span-2 flex items-center gap-2">
          <input type="checkbox" name="consensi_marketing" id="consensi_marketing" className="border-emerald-200" />
          <label htmlFor="consensi_marketing" className="text-sm text-emerald-900/80">Acconsento a ricevere comunicazioni promozionali</label>
        </div>
        <div className="md:col-span-2 flex gap-3 items-center">
          <button disabled={loading} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-md disabled:opacity-60">
            {loading ? 'Invio...' : 'Prenota Ora'}
          </button>
          <a href="tel:+390551234567" className="text-emerald-800 underline">Chiama ora: +39 055 1234567</a>
        </div>
      </form>

      {status && (
        <div className={`mt-4 text-sm ${status.type === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>
          {status.message}
        </div>
      )}

      <div className="mt-10 bg-emerald-50 border border-emerald-100 rounded-xl p-6">
        <h3 className="font-semibold text-emerald-900">Politiche di prenotazione</h3>
        <p className="text-emerald-900/80 mt-2">In caso di ritardo superiore a 15 minuti, la prenotazione potrebbe non essere garantita. Per gruppi superiori a 8 persone, contattaci telefonicamente per un servizio dedicato.</p>
      </div>
    </section>
  )
}

export default Booking
