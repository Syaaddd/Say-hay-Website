import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Greets from './components/Greets.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [name, setName] = useState('')
  return (
    <div className="min-h-[100dvh] bg-zinc-50 text-zinc-900 font-display transition-colors dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <Hero name={name} setName={setName} />
      <Greets name={name} />
      <Footer />
    </div>
  )
}
