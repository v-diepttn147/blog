import React, { Fragment } from 'react'

export default function HeroImage() {
  return (
    <div className="relative h-[350px] w-[350px]">
      <div className="absolute h-[300px] w-[300px] translate-x-5 rounded-full border-[28px] border-gray-900 bg-transparent dark:border-primary-500"></div>
      {/* <div className="absolute h-[300px] w-[300px] rounded-full border-[28px] border-red-500 bg-transparent mix-blend-color"></div> */}
    </div>
  )
}
