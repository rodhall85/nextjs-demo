import { format } from 'date-fns'
//broken some how
export default function Date({ dateString }) {
  console.log('ds', dateString)
  const date = new Date(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}