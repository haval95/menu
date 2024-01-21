import Link from 'next/link'
import React from 'react'
import Type from '../Type';

function Hero() {
  return (
      <div className="hero   ">
            <div className="  absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-5   shadow-lg  rounded-lg">
                  <h1 className=" text-5xl text-white capitalize pb-2">

                <Type text={Array.from([" Special Food", "Taste Elegance", "Indulge Bliss",])} loop={true} cursor={true} />
                </h1>
                    <h2 className="mb-3 text-center">Passionate Creations! </h2>
                    <Link href="/menu" className='btn   text-white border-none bg-yellow-500 rounded-full px-5 py-1 shadow-md hover:shadow-none hover:bg-yellow-600 duration-500'>Check Menu</Link>
                </div>
              </div>
    </div>
  )
}

export default Hero