"use client"
import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
 
export default function Modal() {
    const router = useRouter()


    return (
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true" >

            <div className="fixed  w-screen h-screen inset-0 bg-black  bg-opacity-75 cursor-pointer " ></div>

            <div className="fixed inset-0 z-10 w-screen h-screen">
                <div className="flex flex-col  min-h-full  justify-center   items-center  ">
                <div className="flex flex-col items-center  p-0 ">
                    <button className=" rounded-full w-12 h-12 hover:bg-white hover:text-black duration-300  border pb-2 mb-5 text-white text-3xl  text-center w-  " onClick={()=> router.back()}> x</button>
                   
                        <SignIn redirectUrl="/menu" />
                   
            
               </div>
                </div>
            </div>
        </div>

          
   
  )
}