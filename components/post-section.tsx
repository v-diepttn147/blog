import Post from '@/interfaces/Post'
import Link from 'next/link'
import PostCard from './post-card'

const MAX_DISPLAY = 5

interface PostSectionProps {
  posts: Post[]
}

export default function PostSection(props: PostSectionProps) {
  const { posts } = props

  return (
    <div className="">
      <h1 className="md:leading-14 text-xl font-bold tracking-tight  text-secondary-500 dark:text-gray-100 sm:leading-10 md:text-3xl">
        Posts
      </h1>

      <hr className="my-2 border-t-gray-600" />
      <ul className="">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          return <PostCard key={post.slug} post={post} />
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
