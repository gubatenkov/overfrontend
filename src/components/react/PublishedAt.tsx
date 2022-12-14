import type { FC } from 'react'

interface IProps {
  publishedDate: string
}

const PublishedAt: FC<IProps> = ({ publishedDate }) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const date = new Date(Date.parse(publishedDate))
  const formattedDate = date.toLocaleDateString('en-US', options)

  return (
    <div className="text-sm leading-6">
      <dl>
        <dt className="sr-only">Date</dt>
        <dd className="absolute inset-x-4 top-0 text-zinc-700 dark:text-zinc-400">
          <time dateTime={publishedDate}>{formattedDate}</time>
        </dd>
      </dl>
    </div>
  )
}

export default PublishedAt
