import { useEffect, useState } from 'react'
import { Sun, Moon } from '@phosphor-icons/react'

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
    <header className="sticky top-0 z-10 border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        <a href="#" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          sayhi
        </a>
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Ganti tema"
          className="flex items-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          {dark ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
          {dark ? 'Terang' : 'Gelap'}
        </button>
      </nav>
    </header>
  )
}
