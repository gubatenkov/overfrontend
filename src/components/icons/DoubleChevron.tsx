import type { FC } from 'react'

const DoubleChevron: FC = () => {
  return (
    <svg
      className="mx-auto h-6 w-6 text-zinc-400"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
      />
    </svg>
  )
}

export default DoubleChevron
