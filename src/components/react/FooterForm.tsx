import type { FC } from 'react'
import MailIcon from '@ui/icons/MailIcon'

const FooterForm: FC = () => (
  <form className="-mx-2 flex flex-wrap">
    <div className="mt-3 grow-[9999] basis-64 px-2">
      <div className="group relative">
        <MailIcon />
        <input
          className="form-input"
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
      <button className="form-btn">Subscribe</button>
    </div>
  </form>
)

export default FooterForm
