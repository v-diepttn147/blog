export const dateToMonthYear = (date: string) => {
  const dateMonth = new Date(date).toLocaleString('default', { month: 'long' })
  const dateYear = new Date(date).getFullYear()

  return `${dateMonth.slice(0, 3)} ${dateYear}`
}
