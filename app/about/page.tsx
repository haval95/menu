import React from 'react'
import WhyUs from '@/components/Home/WhyUs'
import HeroTop from '@/components/HeroTop'

function About() {
  return (
      <div>
          <HeroTop title={"About"} image={"/herobg.jpg"} description={null} />
          <WhyUs />
          hello
      </div>
  )
}

export default About