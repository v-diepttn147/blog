import Link from 'next/link'
import React from 'react'
import Button from './Button'
import HeroImage from './HeroImage'
import GlitchText from './GlitchText'

export default function HeroSection() {
  return (
    <section className="my-10 grid grid-cols-2">
      <div className="col-span-2 flex flex-1 flex-col justify-center md:col-span-1">
        <GlitchText>Blog.</GlitchText>
        <GlitchText>Tools.</GlitchText>
        <Link href="/blog" className="my-3 w-fit">
          <Button variant="primary">Read blog</Button>
        </Link>
      </div>

      <div className="relative col-span-2 mt-10 grid flex-1 place-content-center md:col-span-1 md:mt-0">
        <HeroImage />
      </div>
    </section>
  )
}
