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
            className="form-input"
            placeholder="Subscribe via email"
            type="email"
            required
          />

          <button className="form-btn">Subscribe</button>
        </form>
      </section>
    </header>
  )
}

export default HeaderForm
