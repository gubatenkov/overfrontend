import { useEffect, useState } from 'react'

const useWindowScroll = (): boolean => {
  const [isVisible, setVisible] = useState(false)

  const handler = (): void => setVisible(window.scrollY > 50)

  useEffect(() => {
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return isVisible
}

export default useWindowScroll
