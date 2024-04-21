'use client'

import siteMetadata from '@/data/siteMetadata'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null)

  const { theme } = useTheme()

  useEffect(() => {
    const script = document.createElement('script')

    const config = {
      src: 'https://utteranc.es/client.js',
      repo: siteMetadata.utterances,
      'issue-term': 'pathname',
      theme: theme === 'light' ? 'github-light' : 'github-dark',
      crossOrigin: 'anonymous',
      defer: 'true',
    }

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value)
    })

    if (ref.current) {
      ref.current.append(script)
    }

    return () => {
      if (ref.current) {
        ref.current.innerHTML = ''
      }
    }
  }, [theme])

  return (
    <div>
      <h2 className="text-3xl">Comments</h2>
      <div ref={ref} />
    </div>
  )
}
