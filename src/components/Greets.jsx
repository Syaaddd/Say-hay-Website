const PAL = [
  { emoji: '🤝', teks: (n) => `Salaman dulu, ${n}!` },
  { emoji: '✋', teks: (n) => `Hi juga, ${n}! Apa kabar?` },
  { emoji: '😎', teks: (n) => `${n}… cool name. Hi!` },
  { emoji: '🎉', teks: (n) => `YEY ${n} DATANG! *confetti*` },
  { emoji: '🤖', teks: (n) => `Bip boop. Sapaan diterima: ${n}. Hi.` },
  { emoji: '🫡', teks: (n) => `Siap! Salam balik, ${n}.` },
]

export default function Greets({ name }) {
  const n = name.trim() || 'Kamu'
  return (
    <section id="greet-anchor" className="mx-auto max-w-3xl scroll-mt-20 px-4 pb-20">
      <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
        Hasil sapaan
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {PAL.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left shadow-sm transition-colors hover:border-brand/50 dark:border-gray-800 dark:bg-gray-900"
          >
            <span className="text-2xl" aria-hidden>{p.emoji}</span>
            <p className="mt-2 font-medium">{p.teks(n)}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        {name.trim()
          ? 'Ganti nama di atas buat ngerasain sapaan yang beda ✨'
          : 'Psst — tulis namamu dulu di atas biar lebih personal.'}
      </p>
    </section>
  )
}
