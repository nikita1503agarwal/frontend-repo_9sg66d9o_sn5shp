import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] bg-amber-400/10 blur-3xl rounded-full" />
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-fuchsia-500/10 blur-3xl rounded-full" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
