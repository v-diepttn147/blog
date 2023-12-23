import Link from 'next/link'
import React from 'react'
import Button from './Button'
import HeroImage from './HeroImage'
import GlitchText from './GlitchText'

export default function HeroSection() {
  return (
    <section className="my-10 flex">
      <div className="flex flex-1 flex-col justify-center">
        <GlitchText>Blog.</GlitchText>
        <GlitchText>Tools.</GlitchText>
        <Link href="/blog" className="my-3 w-fit">
          <Button variant="primary">Read blog</Button>
        </Link>
      </div>
      <div className="relative grid flex-1 place-content-center">
        <HeroImage />
      </div>
    </section>
  )
}
