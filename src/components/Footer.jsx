export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
      Dibangun pakai{' '}
      <a href="https://react.dev" className="font-medium text-brand hover:underline" target="_blank" rel="noreferrer">
        React 19
      </a>{' '}
      +{' '}
      <a href="https://tailwindcss.com" className="font-medium text-brand hover:underline" target="_blank" rel="noreferrer">
        Tailwind v4
      </a>{' '}
      — © {new Date().getFullYear()} Syaaddd
    </footer>
  )
}
