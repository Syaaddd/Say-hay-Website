const PAL = [
  { icon: '🤝', teks: (n) => `Salaman dulu, ${n}!` },
  { icon: '✋', teks: (n) => `Hi juga, ${n}! Apa kabar?` },
  { icon: '😎', teks: (n) => `${n}, cool name. Hi!` },
  { icon: '🎉', teks: (n) => `YEY ${n} DATANG!` },
  { icon: '🤖', teks: (n) => `Bip boop. Sapaan diterima: ${n}.` },
  { icon: '🫡', teks: (n) => `Siap! Salam balik, ${n}.` },
]

export default function Greets({ name }) {
  const n = name.trim() || 'Kamu'
  return (
    <section id="greet-anchor" className="mx-auto max-w-3xl scroll-mt-20 px-4 pb-20">
      <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        Hasil sapaan
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {PAL.map((p, i) => (
          <div
            key={i}
            className={`rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-zinc-900/40 ${
              i === 0
                ? 'border-brand/30 bg-brand/5 sm:col-span-2 lg:col-span-1'
                : 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'
            }`}
          >
            <span className="text-xl" aria-hidden>{p.icon}</span>
            <p className="mt-2 text-sm font-medium leading-snug text-zinc-800 dark:text-zinc-200">{p.teks(n)}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-zinc-500 dark:text-zinc-500">
        {name.trim()
          ? 'Ganti nama di atas buat sapaan yang beda.'
          : 'Tulis namamu dulu di atas biar lebih personal.'}
      </p>
    </section>
  )
}