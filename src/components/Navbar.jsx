import { useEffect, useState } from 'react'

function getInitial() {
  const t = localStorage.getItem('theme')
  return t === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
}

export default function Navbar() {
  const [dark, setDark] = useState(getInitial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.theme = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200/60 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <a href="#" className="text-lg font-bold tracking-tight">
          say<span className="text-brand">·hi</span> <span aria-hidden>👋</span>
        </a>
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Ganti tema"
          className="rounded-full border border-gray-300 px-3 py-1.5 text-sm transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          {dark ? '☀️ Terang' : '🌙 Gelap'}
        </button>
      </nav>
    </header>
  )
}
