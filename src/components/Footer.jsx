export default function Footer() {
  return (
    <footer className="relative py-10 bg-slate-950/95 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} MetaFolio — Crafted with care.</p>
        <div className="text-white/60 text-sm">
          Built for modern web3 brands.
        </div>
      </div>
    </footer>
  )
}
