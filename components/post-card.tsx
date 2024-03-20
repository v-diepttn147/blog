import siteMetadata from '@/data/siteMetadata'
import Post from '@/interfaces/Post'
import Link from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'
import React from 'react'
import Tag from './tag'
interface PostProps {
  post: Post
}

export default function PostCard(props: PostProps) {
  const { post } = props
  const { slug, date, title, summary, tags } = post

  return (
    <Link
      href={`/blog/${slug}`}
      className="relative block w-full max-w-[544px] cursor-pointer border border-secondary-500 bg-white p-6 shadow-secondary transition-all duration-200 ease-in-out hover:-translate-x-2 hover:border-primary-500 hover:shadow-primary dark:border-white dark:bg-gray-950 dark:shadow-white hover:dark:border-primary-500 hover:dark:shadow-primary"
    >
      <div className="absolute flex gap-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-1 w-1 rounded-full bg-secondary-500 dark:bg-gray-500" />
        ))}
      </div>

      <h2 className="mt-2 text-2xl font-bold text-secondary-500 dark:text-gray-50">{title}</h2>
      <time className="text-secondary-500 dark:text-gray-600" dateTime={date}>
        {formatDate(date, siteMetadata.locale)}
      </time>
      <p className="my-2">{summary}</p>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>

      <div className="absolute -right-[17px] bottom-[2px] flex -rotate-45 flex-col items-center justify-center gap-3">
        <div className="h-[1px] w-[70px] bg-secondary-500 dark:bg-gray-500"></div>
        <div className="h-[1px] w-[50px] bg-secondary-500 dark:bg-gray-500"></div>
        <div className="h-[1px] w-[15px] bg-secondary-500 dark:bg-gray-500"></div>
      </div>
    </Link>
  )
}
