import { useState, useEffect } from 'react'

interface LocalTheme {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const useLocalTheme = (): LocalTheme => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.theme ?? 'light'
  )

  const toggleTheme = (): void => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.theme = theme
  }, [theme])

  return { theme, toggleTheme }
}

export default useLocalTheme
