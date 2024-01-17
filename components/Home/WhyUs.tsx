import React from 'react'
import Image from "next/image"

function whyUs() {
    return (
        <div className="max-w-screen-xl mx-auto my-20 px-6 pt-6">
            <h1 className="text-4xl poppins pb-4">Why you choose us</h1>
            <p className="text-gray-500 text-sm poppins w-2/4">Barton waited twenty always repair in within we do. AN delighted
                offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
                <div className=" border bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
                    <div className="overflow-hidden rounded-2xl flex flex-grow h-72">
                         <Image  width={200} height={300} layout="responsive"
                                objectFit="cover" className="transform transition duration-700 hover:scale-125 " src="/whyus1.png"
                            alt="guyWithBurger" />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                        <div>
                            <img src="/dlvr.png" alt="dlv" className="w-36" />
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
                    <div className="overflow-hidden rounded-2xl flex flex-grow h-72">
                         <Image  width={200} height={300} layout="responsive"
        objectFit="cover" className="transform transition duration-700 hover:scale-125" src="/whyus2.png"
                            alt="guyWithBurger" />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                        <div>
                            <img src="/notify.png" alt="dlv" className="w-36" />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-xl text-gray-800 poppins">A Good Auto Responder</h1>
                            <p className="text-sm text-gray-500 poppins">
Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.</p>
                        </div>
                    </div>
                </div>
                <div className=" border bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
                    <div className="overflow-hidden rounded-2xl flex flex-grow h-72">
                        <Image  width={200} height={300} layout="responsive"
        objectFit="cover" className="transform transition duration-700 hover:scale-125" src="/whyus3.png"
                            alt="guyWithBurger" />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                        <div>
                            <img src="/bus.png" alt="dlv" className="w-36" />
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