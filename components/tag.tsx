'use client'

import { slug } from 'github-slugger'
import { useRouter } from 'next/navigation'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/tags/${slug(text)}`)
  }

  return (
    <div
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
      className="mr-3 inline -skew-x-12 border border-secondary-500 bg-secondary-500 p-1 text-sm font-bold uppercase text-primary-500 hover:border-primary-400 hover:text-primary-600 dark:border-white dark:bg-white dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </div>
  )
}

export default Tag
