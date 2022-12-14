const getPages = (length: number, inc: number = 1): number[] => {
  return Array.from({ length }).map((_, i) => i + inc)
}

const usePagination = (
  totalItems: number,
  currentPage: number,
  itemsPerPage: number
): Array<'...' | number> => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // -> 1 2 3 4 5
  if (totalPages <= 5) {
    return getPages(totalPages)
  }

  // -> 1 2 3 4 ... 10
  if (currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages]
  }

  // -> 1 ... 4 5 6 ... 10
  if (currentPage < totalPages - 2) {
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages
    ]
  }

  // -> 1 ... 7 8 9 10
  return [1, '...', ...getPages(4, totalPages - 3)]
}

export default usePagination
