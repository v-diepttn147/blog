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
      className="group block w-full max-w-[544px] cursor-pointer rounded-md p-2 pl-0"
    >
      <h2 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-accent-500 dark:text-gray-50">
        {title}
      </h2>
      <time className="text-gray-700 dark:text-gray-600" dateTime={date}>
        {formatDate(date, siteMetadata.locale)}
      </time>
      <p className="my-2 text-gray-900 dark:text-gray-300">{summary}</p>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </Link>
  )
}
