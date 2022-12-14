import type { FC } from 'react'
import ChevronIcon from '@ui/icons/ChevronIcon'

const MoveBack: FC = () => {
  return (
    <div className="flex px-4 pt-8 pb-10 lg:px-8">
      <button
        className="group flex items-center gap-3 text-sm font-semibold
        leading-6 text-zinc-700 hover:text-zinc-900 dark:text-zinc-200
        dark:hover:text-white"
        onClick={() => window.history.back()}
        role="link"
      >
        <ChevronIcon
          className="h-auto w-auto rotate-180 overflow-visible text-zinc-400
          group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
        />
        Go back
      </button>
    </div>
  )
}

export default MoveBack
