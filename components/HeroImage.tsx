import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="relative flex h-[350px] w-[350px] items-center justify-center">
      <div className="h-[250px] w-[250px] rotate-45 border-[2px] border-primary-500 bg-transparent"></div>
      <div className="absolute top-[30px] h-[250px] w-[250px] rotate-45 border-[2px] border-secondary-500 bg-transparent dark:border-white"></div>
      <Image
        src="/static/images/hero.png"
        width={300}
        height={300}
        alt="hero-image"
        className="absolute left-1/2 top-0 -translate-x-1/2"
      />
      <div></div>
    </div>
  )
}
