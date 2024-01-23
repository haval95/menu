"use client"
import React from 'react'
import Link from 'next/link'
import HeroTop from '@/components/HeroTop'
import { MdErrorOutline } from "react-icons/md";
import { IoArrowBackCircle } from 'react-icons/io5';
import { useRouter } from 'next/navigation'

function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
     
  return (
       <div className=" relative">
      <HeroTop image={"/notfound.jpg"} position="bottom" description={null} title="OOPS.."  />
      
      <div className=" flex items-center justify-center " >
      
          <main className="p-6 rounded-2xl border-red-100 border  flex flex-col justify-center items-center bg-white shadow-xl my-16">
            <MdErrorOutline className='text-6xl text-red-500 animate-in' />
                  <h1 className="text-9xl font-extrabold text-red-500 tracking-widest  ">Error </h1>
            
            <button className="mt-5">
                <button
                  className=" border border-red-500 shadow-xl rounded-lg px-6 py-1 hover:shadow-none duration-500 font-medium text-red-500 group bg-white"
                >
                 

                 
                          <button onClick={() => reset}
                              className="font-bold text-lg inline-block">
                             <span>  <IoArrowBackCircle className="text-red-500 animate-back inline-block text-2xl mx-2" /> 
                              Go Home</span></button>
                 
                </button>
              </button>
          </main>
       
      </div>
    </div>
  )
}

export default ErrorBoundary