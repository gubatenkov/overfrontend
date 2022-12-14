import type { FC } from 'react'

interface IProps {
  className?: string
}

const CircleIcon: FC<IProps> = ({ className = '' }) => {
  return (
    <svg
      className={`${className} absolute right-full hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)]
      overflow-visible text-zinc-200 dark:text-zinc-600 sm:block`}
      viewBox="0 0 9 9"
    >
      <circle
        className="fill-white dark:fill-zinc-900"
        stroke="currentColor"
        strokeWidth="2"
        cx="4.5"
        cy="4.5"
        r="4.5"
      />
    </svg>
  )
}

export default CircleIcon
