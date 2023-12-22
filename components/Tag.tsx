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
    <span
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </span>
  )
}

export default Tag
