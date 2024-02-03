import React from 'react'
import Image from 'next/image'
import { FaCarSide } from "react-icons/fa";
function AboutCard({otherCssClasses="", color="yellow", image ={url:"/whyus1.png"}, icon=<FaCarSide />, title="title", detail="detail" }: { otherCssClasses:string,color:string, image: { url: string }, icon: React.ReactNode, title:string, detail:string}) {
  return (
                    <div className=" w-96 border bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
                    <div className="overflow-hidden rounded-2xl flex flex-grow h-72 relative">
                       
                        <Image
                           fill={true}
                            className="transform transition duration-700 hover:scale-125"
                            src={image?.url}
                            alt="guyWithBurger"
                            />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                        <div className={`bg-${color}-500 ${otherCssClasses} justify-self-center align-center text-2xl rounded-full h-12 text-black px-3 py-3`}>
                            {icon}
                        </div>
                        <div className="flex flex-col space-y-3">
                  <h1 className="text-xl text-gray-800 poppins">{title} </h1>
                            <p className="text-sm text-gray-500 poppins">{detail}</p>
                        </div>
                    </div>
                </div>
  )
}

export default AboutCard