import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,166,0,0.18),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(147,51,234,0.16),transparent_30%),linear-gradient(to_bottom,rgba(2,6,23,0.65),rgba(2,6,23,0.9))] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <motion.span initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 ring-1 ring-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for freelance
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Creative Web3 Developer
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
            I build playful, performant experiences for dApps, wallets, and web3 products. Blending clean design with subtle 3D to make brands feel alive.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-amber-400 via-orange-500 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(255,140,0,0.35)] hover:shadow-[0_0_35px_rgba(255,140,0,0.55)] transition-shadow">
              See Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/20">
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
