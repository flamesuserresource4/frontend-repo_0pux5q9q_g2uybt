import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/chi-siamo', label: 'Chi Siamo' },
  { to: '/menu', label: 'Menu' },
  { to: '/prenotazioni', label: 'Prenotazioni' },
  { to: '/galleria', label: 'Galleria' },
  { to: '/recensioni', label: 'Recensioni' },
  { to: '/eventi', label: 'Eventi & News' },
  { to: '/contatti', label: 'Contatti' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-emerald-900 bg-emerald-100' : 'text-emerald-900/80 hover:text-emerald-900'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-serif font-semibold tracking-tight text-emerald-900">
              La Terrazza del Gusto
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <a href="tel:+390551234567" className="ml-2 inline-flex items-center gap-2 text-emerald-900/80 hover:text-emerald-900">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+39 055 1234567</span>
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Apri menu">
            <Menu className="w-6 h-6 text-emerald-900" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
