export default function Hero({ name, setName }) {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-16 pt-20 sm:pt-24">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            Say <span className="text-brand font-extrabold">Hi</span>
          </h1>
          <p className="mt-3 max-w-md text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Website simpel buat sapa-sapaan. Tulis namamu, sana salamin balik.
          </p>
        </div>
        <div
          aria-hidden
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand/10 text-4xl animate-wave sm:h-24 sm:w-24"
        >
          👋
        </div>
      </div>

      <div className="mt-8 flex max-w-sm flex-col gap-2 sm:flex-row">
        <label htmlFor="nama-input" className="sr-only">Nama kamu</label>
        <input
          id="nama-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && document.getElementById('greet-anchor')?.scrollIntoView()}
          placeholder="Nama kamu..."
          maxLength={30}
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
        <a
          href="#greet-anchor"
          className="shrink-0 rounded-xl bg-brand px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-dark active:scale-[0.98]"
        >
          Sapa
        </a>
      </div>
    </main>
  )
}

</content>