import React from 'react'
import {UserButton} from '@clerk/nextjs'
import Image from "next/image"
function Navbar() {
  return (
      <nav className=" hidden z-10  fixed w-full sm:flex items-center justify-between text-white border-gray-950 px-5 border-b-[1px] shadow-sm">
          <Image src='/logo.webp' alt="logo" width={75} height={75} />
          <div className="flex gap-5">
              <h2 className="hover:text-yellow-200 cursor-pointer duration-500  active:text-yellow-500">Home</h2>
              <h2 className="hover:text-yellow-200 cursor-pointer duration-500">About</h2>
              <h2 className="hover:text-yellow-200 cursor-pointer duration-500">Menu</h2>
              <h2 className="hover:text-yellow-200 cursor-pointer duration-500">Book</h2>
          </div>
            <UserButton/>
    </nav>
  )
}

export default Navbar