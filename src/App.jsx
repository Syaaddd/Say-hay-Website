import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Greets from './components/Greets.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [name, setName] = useState('')
  return (
    <div className="min-h-screen bg-white text-gray-900 font-display transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <Hero name={name} setName={setName} />
      <Greets name={name} />
      <Footer />
    </div>
  )
}
