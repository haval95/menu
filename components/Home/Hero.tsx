import React from 'react'

function Hero() {
  return (
      <div className="hero   ">
            <div className="  absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-5   shadow-lg  rounded-lg">
                    <h1 className=" text-5xl text-white ">  Special Food<span className="text-yellow-500">.</span></h1>
                    <h2 className="mb-3 text-end">Passionate Creations! </h2>
                    <button className='btn text-white border-none bg-yellow-500 rounded-full px-5 py-1 shadow-md hover:shadow-none hover:bg-yellow-600 duration-500'>Check Menu</button>
                </div>
              </div>
    </div>
  )
}

export default Hero