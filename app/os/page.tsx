import Button from '@/components/Button'
import Tag from '@/components/tag'
import Link from 'next/link'
import React from 'react'

interface OpenSource {
  id: string
  name: string
  url: string
}

const openSource: OpenSource[] = [
  {
    id: '1',
    name: 'react-stacked-toast',
    url: '/os/react-stacked-toast',
  },
]

export default function OpenSource() {
  return (
    <div>
      <ul>
        {openSource.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>
              <Tag text={item.name}></Tag>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
