"use client"
import HeroTop from '@/components/HeroTop'
import React from 'react'
import { useRouter } from 'next/navigation';
function notFound() {
 const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className=" relative">
      <HeroTop image={"/notfound.jpg"} position="bottom"  title="OOPS.."  />
      
      <div className=" flex items-center justify-center" >
      
          <main className="p-6 rounded-2xl   flex flex-col justify-center items-center bg-yellow-500 shadow-xl my-16">
            <h1 className="text-9xl font-extrabold text-white tracking-widest ">404</h1>
            <div className="bg-red-500 animate-bounce px-2 text-sm rounded rotate-12 absolute text-white  shadow-xl">
              Page Not Found
            </div>
            <button className="mt-5">
                <button
                  className="shadow-xl rounded-lg px-6 py-1 hover:shadow-none duration-500 font-medium text-yellow-500 group bg-white"
                >
                 

                 
                    <button onClick={handleGoBack} className="font-bold text-lg">Go Back</button>
                 
                </button>
              </button>
          </main>
       
      </div>
    </div>
  )
}

export default notFound