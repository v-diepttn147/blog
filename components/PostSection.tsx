import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'
import React from 'react'
import Tag from './Tag'
import Post from '@/interfaces/Post'

const MAX_DISPLAY = 5

interface PostSectionProps {
  posts: Post[]
}

export default function PostSection(props: PostSectionProps) {
  const { posts } = props

  return (
    <div className="">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-secondary-500 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
          Posts
        </h1>
      </div>
      <ul className="">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          return <PostCard key={post.slug} post={post} />
          // const { slug, date, title, summary, tags } = post
          // return (
          //   <li key={slug} className="py-12">
          //     <article>
          //       <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          //         <dl>
          //           <dt className="sr-only">Published on</dt>
          //           <dd className="text-base font-medium leading-6 text-secondary-500 dark:text-gray-400">
          //             <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
          //           </dd>
          //         </dl>
          //         <div className="space-y-5 xl:col-span-3">
          //           <div className="space-y-6">
          //             <div>
          //               <h2 className="text-2xl font-bold leading-8 tracking-tight">
          //                 <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
          //                   {title}
          //                 </Link>
          //               </h2>
          //               <div className="flex flex-wrap">
          //                 {tags.map((tag) => (
          //                   <Tag key={tag} text={tag} />
          //                 ))}
          //               </div>
          //             </div>
          //             <div className="prose max-w-none text-secondary-500 dark:text-gray-400">
          //               {summary}
          //             </div>
          //           </div>
          //           <div className="text-base font-medium leading-6">
          //             <Link
          //               href={`/blog/${slug}`}
          //               className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          //               aria-label={`Read more: "${title}"`}
          //             >
          //               Read more &rarr;
          //             </Link>
          //           </div>
          //         </div>
          //       </div>
          //     </article>
          //   </li>
          // )
        })}
      </ul>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </div>
  )
}

interface PostProps {
  post: Post
}

function PostCard(props: PostProps) {
  const { post } = props
  const { slug, date, title, summary, tags } = post

  return (
    <Link
      href={`/blog/${slug}`}
      className="relative block w-full max-w-[544px] cursor-pointer bg-gray-500 p-6 shadow-gray transition-all duration-200 ease-in-out hover:-translate-x-2 hover:bg-gray-300 hover:shadow-primary dark:bg-secondary-500"
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
        <div className="h-[2px] w-[70px] bg-secondary-500 dark:bg-gray-500"></div>
        <div className="h-[2px] w-[50px] bg-secondary-500 dark:bg-gray-500"></div>
        <div className="h-[2px] w-[15px] bg-secondary-500 dark:bg-gray-500"></div>
      </div>
    </Link>
  )
}
