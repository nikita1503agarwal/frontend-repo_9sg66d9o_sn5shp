import { motion } from 'framer-motion'
import { Box, Lock, Zap, ShieldCheck } from 'lucide-react'

const projects = [
  {
    title: 'MetaWallet Play',
    desc: 'A playful wallet onboarding flow with 3D tokens and animated approvals.',
    tags: ['React', 'Framer Motion', 'Web3 UX'],
  },
  {
    title: 'DeFi Dash',
    desc: 'Clean analytics dashboard for staking yields and liquidity pools.',
    tags: ['Tailwind', 'Charts', 'API'],
  },
  {
    title: 'NFT Gallery',
    desc: 'Interactive 3D gallery to explore collections in a spatial layout.',
    tags: ['Three.js', 'Spline', 'NFT'],
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(236,72,153,0.08),transparent),radial-gradient(600px_200px_at_80%_10%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="text-white/70 mt-2">A mix of product experiments and shipped interfaces.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-amber-300 mb-3">
                  {i === 0 && <Zap className="w-4 h-4" />} {i === 1 && <ShieldCheck className="w-4 h-4" />} {i === 2 && <Lock className="w-4 h-4" />}
                  <span className="text-xs uppercase tracking-wider">Case Study</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-white/70 text-sm mt-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
