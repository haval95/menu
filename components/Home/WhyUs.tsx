import React from 'react'
import Image from 'next/image'
import { FaCarSide } from "react-icons/fa";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
function whyUs() {
    return (
        <div className="max-w-screen-xl mx-auto my-20 px-6 pt-6 text-black">
            <h1 className="text-4xl poppins pb-4">Why you choose us</h1>
            <p className="text-gray-500 text-sm poppins w-2/4">Barton waited twenty always repair in within we do. AN delighted
                offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
                <div className=" border bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
                    <div className="overflow-hidden rounded-2xl flex flex-grow h-72 relative">
                       
                        <Image
                           fill={true}
                            className="transform transition duration-700 hover:scale-125"
                            src="/whyus1.png"
                            alt="guyWithBurger"
                            />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                        <div className='bg-yellow-500 justify-self-center align-center text-2xl rounded-full h-12 text-black px-3 py-3'>
                            <FaCarSide />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-xl text-gray-800 poppins">Fast Delivery</h1>
                            <p className="text-sm text-gray-500 poppins">Keep your systems in sync with automated web hook bases
                                notifications each tume link is paid and how we dream about our
                                future.</p>
                        </div>
                    </div>
                </div>
                <div className=" border bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
                    <div className="overflow-hidden rounded-2xl flex flex-grow h-72 relative">
                            <Image
                           fill={true}
                            className="transform transition duration-700 hover:scale-125"
                            src="/whyus2.png"
                            alt="guyWithBurger"
                            />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                         <div className='bg-yellow-500 justify-self-center align-center text-2xl rounded-full h-12 text-black px-3 py-3'>
                            <RiQuestionAnswerLine />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-xl text-gray-800 poppins">A Good Auto Responder</h1>
                            <p className="text-sm text-gray-500 poppins">
Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.</p>
                        </div>
                    </div>
                </div>
                <div className=" border bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
                    <div className="overflow-hidden rounded-2xl flex flex-grow h-72 relative">
                        <Image
                            fill={true}
                          
                            className="transform transition duration-700 hover:scale-125"
                            src="/whyus3.png"
                            alt="guyWithBurger"
                            />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                         <div className='bg-yellow-500 justify-self-center align-center text-2xl rounded-full h-12 text-black px-3 py-3'>
                            <IoHomeOutline />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-xl text-gray-800 poppins">Home Delivery</h1>
                            <p className="text-sm text-gray-500 poppins">
Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.</p>
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
    )
}

export default whyUs