import type { FC } from 'react'
import usePagination from 'src/hooks/usePagination'

export interface IProps {
  totalItems: number
  currentPage: number
  itemsPerPage: number
}

const Pagination: FC<IProps> = ({ totalItems, currentPage, itemsPerPage }) => {
  const pages = usePagination(totalItems, currentPage, itemsPerPage)

  return (
    <ul className="mx-auto flex w-fit justify-center gap-4">
      {(pages ?? []).map((pageNumber) => {
        return pageNumber === '...'
          ? (
          <li className="mt-auto flex" key={pageNumber}>
            <span className="text-sm font-semibold text-black dark:text-rose-400">
              {'. . .'}
            </span>
          </li>
            )
          : (
          <li
            className={`${
              pageNumber === currentPage
                ? 'border-transparent bg-rose-600 text-white shadow-md hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400'
                : 'border-rose-600 text-rose-600 hover:shadow-md dark:border-rose-500 dark:text-rose-500 dark:hover:border-rose-400 dark:hover:text-rose-400'
            } relative h-8 w-8 rounded-full border text-sm font-semibold outline-none ring-black hover:shadow-md`}
            key={pageNumber}
          >
            <a
              className="absolute top-0 left-0 right-0 bottom-0 inline-flex items-center justify-center
              rounded-full focus:outline-none ring-black focus:ring-2 dark:shadow-none dark:ring-rose-50"
              href={pageNumber === 1 ? '/' : `/page/${pageNumber}`}
            >
              {pageNumber}
            </a>
          </li>
            )
      })}
    </ul>
  )
}

export default Pagination
