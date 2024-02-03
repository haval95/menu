import React from 'react'
import Image from 'next/image'
import { FaCarSide } from "react-icons/fa";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import AboutCard from '../cards/AboutCard';

const cardContents = [
    {
        title: "Fast Delivery", 
        detail:"Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
        icon: <FaCarSide />,
        image: { url: "/whyus1.png" },
        otherCssClasses:" text-white"

    },
    {
        title: "A Good Auto Responder", 
        detail:"Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
        icon: <RiQuestionAnswerLine />,
        image: { url: "/whyus2.png" },
        otherCssClasses:" text-white"

    },
    {
        title: "Home Delivery", 
        detail:"Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
        icon:    <IoHomeOutline />,
        image: { url: "/whyus3.png" },
        otherCssClasses:" text-white"

    }

]
   




function whyUs({color="yellow"}:{color:string} ) {
    return (
        <div className="max-w-screen-sm md:max-w-screen-xl mx-auto my-20 px-6 pt-6 text-black">
            <div className={`border-l-4 pl-4 border-${color}-500 `}>
            <h1 className="text-4xl poppins pb-4 ">Why you choose us</h1>
            <p className="text-gray-500 text-sm poppins ">Barton waited twenty always repair in within we do. AN delighted
                offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>

            </div>

            <div className=" flex justify-center flex-wrap mt-7 gap-10">
                {cardContents.map(item => { return <AboutCard color={color} {...item} />})}           
            </div>
        </div>
    )
}

export default whyUs