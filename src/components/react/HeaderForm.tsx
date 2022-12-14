import type { FC } from 'react'
import MailIcon from '@ui/icons/MailIcon'

const HeaderForm: FC = () => {
  return (
    <header className="px-2 py-16 text-left sm:text-center">
      <h1
        className="mb-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-200
        sm:text-4xl"
      >
        Latest Updates
      </h1>

      <p className="mb-5 text-lg text-zinc-700 dark:text-zinc-400">
        All the latest Frontend blogs, straight from the author.
      </p>

      <section>
        <h2 className="sr-only">Sign up for our newsletter</h2>
        <form className="group relative flex max-w-[375px] flex-wrap gap-4 sm:mx-auto">
          <MailIcon />

          <input
            className="block w-full grow-[999] basis-64 appearance-none rounded-md border border-transparent
            bg-white py-2 pl-12 pr-3 leading-5 text-zinc-900 shadow-inner ring-1 ring-zinc-900/5
            placeholder:text-zinc-400 focus:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-500/10
            dark:bg-zinc-700/20 dark:text-white dark:ring-zinc-200/20 dark:focus:ring-rose-500/10 sm:text-sm"
            placeholder="Subscribe via email"
            type="email"
            required
          />

          <button
            className="flex-auto rounded-md border-y border-transparent bg-rose-600 py-2 px-3 text-sm font-semibold text-white
            shadow hover:bg-rose-500 hover:shadow-none focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2
            dark:bg-rose-500 dark:hover:bg-rose-400 dark:focus:ring-rose-700 dark:focus:ring-offset-zinc-900"
          >
            Subscribe
          </button>
        </form>
      </section>
    </header>
  )
}

export default HeaderForm
