import React from 'react'
import WhyUs from '@/components/Home/WhyUs'
import HeroTop from '@/components/HeroTop'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: "About"
  },
  description: 'we are shoing our menu here.',
}
function About() {
  return (
      <div>
          <HeroTop position={"bottom"} title={"About"} image={"/herobg.jpg"} description={null} />
          <WhyUs />
        
      </div>
  )
}

export default About