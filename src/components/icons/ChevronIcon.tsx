import type { FC } from 'react'

interface IProps {
  className: string
}

const ChevronIcon: FC<IProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="currentColor"
      viewBox="0 0 3 6"
      strokeWidth="2"
      fill="none"
      height="6"
      width="3"
    >
      <path d="M0 0L3 3L0 6" />
    </svg>
  )
}

export default ChevronIcon
