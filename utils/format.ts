export const dateToMonthYear = (date: string) => {
  const dateMonth = new Date(date).toLocaleString('default', { month: 'short' })
  const dateYear = new Date(date).getFullYear()

  return `${dateMonth} ${dateYear}`
}
