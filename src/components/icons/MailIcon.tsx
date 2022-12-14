import type { FC } from 'react'

const MailIcon: FC = () => (
  <svg
    className="pointer-events-none absolute inset-y-0 top-2 left-3 h-6 w-6 text-zinc-400
    group-focus-within:text-rose-500 dark:group-focus-within:text-zinc-400"
    viewBox="0 0 24 24"
    strokeLinejoin="round"
    strokeLinecap="round"
    stroke="currentColor"
    aria-hidden="true"
    strokeWidth="2"
    fill="none"
  >
    <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z" />
    <path d="m6 7 6 5 6-5" />
  </svg>
)

export default MailIcon
