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
      className="group flex w-full max-w-[544px] cursor-pointer flex-col rounded-md bg-gray-50 p-4 dark:bg-gray-700"
    >
      <h2 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-accent-500 dark:text-gray-50">
        {title}
      </h2>
      <time className="text-gray-500 dark:text-gray-300" dateTime={date}>
        {formatDate(date, siteMetadata.locale)}
      </time>
      <p className="my-2 block flex-grow text-gray-900 dark:text-gray-100">{summary}</p>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </Link>
  )
}
