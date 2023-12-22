import React from 'react'
import s from './index.module.css'

interface GlitchTextProps {
  children: string
}

export default function GlitchText(props: GlitchTextProps) {
  const { children } = props
  return (
    <p className={`${s.glitch} text-5xl text-secondary-500 dark:text-white`} data-text={children}>
      {children}
    </p>
  )
}
