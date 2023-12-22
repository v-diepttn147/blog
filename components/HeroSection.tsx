import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import HeroImage from './HeroImage'
import GlitchText from './GlitchText'

export default function HeroSection() {
  return (
    <section className="mb-5 flex">
      <div className="flex flex-1 flex-col justify-center">
        <GlitchText>Thought.</GlitchText>
        <GlitchText>Build.</GlitchText>
        <Link href="/blog" className="my-3 w-fit">
          <Button variant="primary">Read blog</Button>
        </Link>
      </div>
      <div className="relative grid h-fit w-fit flex-1 place-content-center">
        {/* <Image src="/static/images/hero.png" height={350} width={350} alt="hero-image" /> */}
        {/* <HeroImage /> */}
      </div>
    </section>
  )
}
