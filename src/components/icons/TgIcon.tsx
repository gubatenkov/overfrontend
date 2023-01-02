import type { FC } from 'react'

const TgIcon: FC<{ className: string }> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path
        fill="currentColor"
        d="M11.994 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10Zm3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11l-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989l.01.009l.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23c.012-.23-.361 0-.361 0l-6.473 4.164l-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258Z"
      />
    </svg>
  )
}

export default TgIcon
