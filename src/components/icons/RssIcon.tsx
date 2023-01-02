import type { FC } from 'react'

const RssIcon: FC<{ className: string }> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path
        fill="currentColor"
        d="M2.88 16.88a3 3 0 0 0 0 4.24a3 3 0 0 0 4.24 0a3 3 0 0 0-4.24-4.24Zm2.83 2.83a1 1 0 0 1-1.42-1.42a1 1 0 0 1 1.42 0a1 1 0 0 1 0 1.42ZM5 12a1 1 0 0 0 0 2a5 5 0 0 1 5 5a1 1 0 0 0 2 0a7 7 0 0 0-7-7Zm0-4a1 1 0 0 0 0 2a9 9 0 0 1 9 9a1 1 0 0 0 2 0a11.08 11.08 0 0 0-3.22-7.78A11.08 11.08 0 0 0 5 8Zm10.61.39A15.11 15.11 0 0 0 5 4a1 1 0 0 0 0 2a13 13 0 0 1 13 13a1 1 0 0 0 2 0a15.11 15.11 0 0 0-4.39-10.61Z"
      />
    </svg>
  )
}

export default RssIcon
