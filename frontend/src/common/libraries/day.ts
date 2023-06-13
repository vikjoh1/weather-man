import * as dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import isToday from 'dayjs/plugin/isToday'

dayjs.extend(advancedFormat)
dayjs.extend(isToday)

export function formatDate(dateString: string): string {
  const date = dayjs(dateString)
  if (date.isToday()) {
    return `Today, ${date.format('Do of MMMM')}`
  } else {
    return date.format('dddd, Do of MMMM')
  }
}

export function formatToTime(dateString: string): string {
  const date = dayjs(dateString)
  return date.format('HH:mm')
}