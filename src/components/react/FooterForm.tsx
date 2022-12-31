import type { FC } from 'react'
import MailIcon from '@ui/icons/MailIcon'

const FooterForm: FC = () => (
  <form className="-mx-2 flex flex-wrap">
    <div className="mt-3 grow-[9999] basis-64 px-2">
      <div className="group relative">
        <MailIcon />
        <input
          className="block w-full grow-[999] basis-64 appearance-none rounded-md border border-transparent
          bg-white py-2 pl-12 pr-3 leading-5 text-zinc-900 shadow-inner ring-1 ring-zinc-900/5
          placeholder:text-zinc-400 focus:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-500/10
          dark:bg-zinc-700/20 dark:text-white dark:ring-zinc-200/20 dark:focus:ring-rose-500/10
          sm:text-sm"
          placeholder="Subscribe via email"
          aria-label="Email address"
          autoComplete="email"
          type="email"
          name="email"
          required
        />
      </div>
    </div>
    <div className="mt-3 flex grow px-2">
      <button
        type="submit"
        className="flex-auto rounded-md border-y border-transparent bg-rose-500 py-2 px-3 text-sm
        font-semibold text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2
        focus:ring-rose-300 focus:ring-offset-2 dark:hover:bg-rose-400 dark:focus:ring-rose-700
        dark:focus:ring-offset-zinc-900"
      >
        Subscribe
      </button>
    </div>
  </form>
)

export default FooterForm
