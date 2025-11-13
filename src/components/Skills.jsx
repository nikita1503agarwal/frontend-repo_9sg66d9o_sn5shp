import { motion } from 'framer-motion'
import { Braces, Boxes, Palette, Rocket } from 'lucide-react'

const skills = [
  { icon: Braces, title: 'Frontend', desc: 'React, Vite, Tailwind, Framer Motion' },
  { icon: Boxes, title: 'Web3', desc: 'Wallet UX, approvals, signing flows, gas-less patterns' },
  { icon: Palette, title: 'Visual', desc: 'Design systems, motion, 3D composition' },
  { icon: Rocket, title: 'Performance', desc: 'Accessibility, bundle budgets, audits' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_80%,rgba(250,204,21,0.06),transparent),radial-gradient(600px_200px_at_80%_60%,rgba(192,132,252,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">Skills & Focus</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
              <s.icon className="w-6 h-6 text-amber-300" />
              <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
              <p className="text-white/70 text-sm mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
