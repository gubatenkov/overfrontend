export const getDay = (timestamp: string): string => {
  const day = `${new Date(timestamp).getDate()}`
  return day
}

export const getMonth = (timestamp: string): string => {
  const month = new Date(timestamp).toLocaleString('default', {
    month: 'short'
  })
  return month
}
