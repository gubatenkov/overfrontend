import type { FC } from 'react'
import { useState, useEffect } from 'react'

import SunIcon from '@ui/icons/SunIcon'
import MoonIcon from '@ui/icons/MoonIcon'

import useLocalTheme from 'src/hooks/useLocalTheme'

const ToggleTheme: FC = () => {
  const { theme, toggleTheme } = useLocalTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <button
      className="rounded-md p-2 hover:bg-gray-50/50 dark:hover:bg-zinc-50/10"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      {theme === 'dark' && isMounted
        ? (
        <MoonIcon className="h-[18px] w-[18px] opacity-60 dark:text-zinc-200" />
          )
        : (
        <SunIcon className="h-[18px] w-[18px] opacity-60 dark:text-zinc-200" />
          )}
    </button>
  )
}

export default ToggleTheme
