export default function Hero({ name, setName }) {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-16 pt-20 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
        Say <span className="text-brand">Hi</span>{' '}
        <span className="animate-wave" aria-hidden>👋</span>
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-gray-600 dark:text-gray-400">
        Website simpel buat sapa-sapaan. Tulis namamu, sana salamin balik.
      </p>

      <div className="mx-auto mt-8 flex max-w-sm gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && document.getElementById('greet-anchor')?.scrollIntoView()}
          placeholder="Nama kamu…"
          maxLength={30}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30 dark:border-gray-700 dark:bg-gray-900"
        />
        <a
          href="#greet-anchor"
          className="shrink-0 rounded-xl bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Sapa
        </a>
      </div>
    </main>
  )
}
