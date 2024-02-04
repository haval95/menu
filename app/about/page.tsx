import React from 'react'
import WhyUs from '@/components/Home/WhyUs'
import HeroTop from '@/components/HeroTop'
import { Metadata } from 'next'
import LocationMap from './_components/LocationMap'
import WhoWeAre from './_components/WhoWeAre'

const content = {
  title: "About Us",
  subtitle: "Who we are?",
  detail: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
  slogan: "Successfully Providing business solutions from 25 years" ,
  image: { url: "/aboutussection.jpg" },
  buttonDestination: "/book",
  buttonText: "book now"
}
export const metadata: Metadata = {
  title: {
    absolute: "About"
  },
  description: 'we are shoing our menu here.',
}
function About() {
  return (
      <div>
      <HeroTop position={"bottom"} title={"About"} image={"/herobg.jpg"} description={""} />
      <WhoWeAre content={content} color="yellow" />
      
     <hr className="max-w-screen-xl  mx-auto   " />
      
      <WhyUs color='yellow' />
      <LocationMap />
        
      </div>
  )
}

export default About