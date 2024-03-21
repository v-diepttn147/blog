import { slug } from 'github-slugger'
import Link from 'next/link'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 inline -skew-x-12 rounded-sm border border-accent-400 p-1 text-xs font-bold uppercase text-accent-500 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
