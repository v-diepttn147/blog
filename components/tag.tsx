import { slug } from 'github-slugger'
import Link from 'next/link'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 inline rounded-md border border-accent-700 px-1 text-xs text-accent-700 hover:border-accent-500 hover:text-accent-500 dark:border-accent-400 dark:text-accent-400 dark:hover:border-accent-300 dark:hover:text-accent-300"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
