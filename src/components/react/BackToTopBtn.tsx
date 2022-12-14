import type { FC } from 'react'
import DoubleChevron from '@ui/icons/DoubleChevron'
import useWindowScroll from 'src/hooks/useWindowScroll'

const BackToTopBtn: FC = () => {
  const isScrolled = useWindowScroll()

  const handleClick = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={
        (isScrolled ? 'opacity-60' : 'opacity-0') +
        ' h-10 w-10 fixed right-4 min-[1148px]:right-[calc((100vw-70rem)/2)] bottom-10 rounded-full bg-zinc-300 tap-h'
      }
      onClick={handleClick}
    >
      <DoubleChevron />
    </button>
  )
}

export default BackToTopBtn
