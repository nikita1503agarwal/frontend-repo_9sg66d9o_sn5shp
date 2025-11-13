import { useState } from 'react'
import { Menu, X, Wallet2, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl/50 bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-fuchsia-500 shadow-[0_0_25px_rgba(255,140,0,0.35)]">
              <Wallet2 className="w-5 h-5 text-white drop-shadow" />
            </span>
            <span className="text-white/90 font-semibold tracking-tight">
              MetaFolio
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="mailto:hello@you.dev" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/10 text-white">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/80" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
