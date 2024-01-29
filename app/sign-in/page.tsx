"use client"
import { SignIn } from "@clerk/nextjs";



export default function Page() {

    return (<>

    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 h-screen flex items-center justify-center "><SignIn redirectUrl="/menu" /> </div>
    </>)
}