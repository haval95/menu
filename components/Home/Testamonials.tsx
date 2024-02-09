"use client"
import React from 'react'
import Image from 'next/image'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
function Testamonials({ color = "yellow" }:{color?:string}) {
  return (
      <div className='  text-black py-20  max-w-screen-sm md:max-w-screen-xl mx-auto '>
            <div className="max-w-screen-sm md:max-w-screen-xl mx-auto my-10 px-6 pt-6 text-black">
            <div className={`text-center  `}>
            <h1 className="text-4xl text-center pb-4 ">Testimonials</h1>
            <p className="text-black text-sm poppins ">Here are some Testimonials from our amazing customers. </p>

            </div>
        </div>
         
          <Carousel autoPlay={true} showArrows dynamicHeight={false} infiniteLoop centerMode={true} centerSlidePercentage={40} >
                <div className="w-96   flex items-center overflow-hidden shadow-lg  border border-yellow-300  ">
                    <div className="flex  justify-center  mx-auto bg-white  flex-col text-center  p-6">
                      <div className="w-24 h-24 mx-auto pb-6 overflow-hidden rounded-full border-2 border-yellow-500">
                          <Image width={100} height={100}  src="/person1.jpg" alt="" className=' object-cover w-28 h-28 ' />
                      </div>
                      <div className="py-4 flex-col space-y-2">
                          <h1 className="text-2xl font-bold">Alex Garcia</h1>
                          <p> Absolutely blown away by [Restaurant Name]'s exquisite flavors and impeccable service. A culinary adventure that's worth every bite!</p>
                        </div>
                    </div>
                </div>
                <div className="w-96   flex items-center overflow-hidden shadow-lg  border border-yellow-300  ">
                    <div className="flex  justify-center  mx-auto bg-white  flex-col text-center  p-6">
                      <div className="w-24 h-24 mx-auto pb-6 overflow-hidden rounded-full border-2 border-yellow-500">
                          <Image width={100} height={100}  src="/person2.jpg" alt="" className=' object-cover w-28 h-28 ' />
                      </div>
                      <div className="py-4 flex-col space-y-2">
                          <h1 className="text-2xl font-bold">Marta</h1>
                          <p> [Restaurant Name] sets the bar high for fine dining. Exceptional service and flavors that dance on your palate. A must-visit for food enthusiasts!</p>
                        </div>
                    </div>
                </div>
                <div className="w-96   flex items-center overflow-hidden shadow-lg  border border-yellow-300  ">
                    <div className="flex  justify-center  mx-auto bg-white  flex-col text-center  p-6">
                     <div className="w-24 h-24 mx-auto pb-6 overflow-hidden rounded-full border-2 border-yellow-500">
                          <Image width={100} height={100}  src="/person3.jpg" alt="" className=' object-cover w-28 h-28 ' />
                      </div>
                      <div className="py-4 flex-col space-y-2">
                          <h1 className="text-2xl font-bold">Sandra</h1>
                          <p> Sensational flavors await at [Restaurant Name]. Each dish is a masterpiece, leaving you craving more. A true gem for flavor seekers!</p>
                        </div>
                    </div>
                </div>
                <div className="w-96   flex items-center overflow-hidden shadow-lg  border border-yellow-300  ">
                    <div className="flex  justify-center  mx-auto bg-white  flex-col text-center  p-6">
                     <div className="w-24 h-24 mx-auto pb-6 overflow-hidden rounded-full border-2 border-yellow-500">
                          <Image width={100} height={100}  src="/person4.jpg" alt="" className=' object-cover w-28 h-28 ' />
                      </div>
                      <div className="py-4 flex-col space-y-2">
                          <h1 className="text-2xl font-bold">James</h1>
                          <p> Absolutely blown away by [Restaurant Name]'s exquisite flavors and impeccable service. A culinary adventure that's worth every bite!</p>
                        </div>
                    </div>
                </div>
              
              
            </Carousel>
     </div>
  )
}

export default Testamonials