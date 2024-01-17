import React from 'react'
import {UserButton} from '@clerk/nextjs'
import Image from "next/legacy/image"
import Link from 'next/link';
function Navbar() {
  return (
      <nav className=" hidden z-10  fixed w-full  sm:flex inset-x-0 items-center justify-between  text-white max-w-screen-xl mx-auto px-5  shadow-sm">
          <Image src='/logo.webp' alt="logo" width={75} height={75} />
          <div className="flex gap-5">
              <Link href="/" className="hover:text-yellow-200 cursor-pointer duration-500  active:text-yellow-500">Home</Link>
              <Link href="/menu" className="hover:text-yellow-200 cursor-pointer duration-500">About</Link>
              <Link href="/menu" className="hover:text-yellow-200 cursor-pointer duration-500">Menu</Link>
              <Link href="/menu" className="hover:text-yellow-200 cursor-pointer duration-500">Book</Link>
          </div>
            <UserButton/>
    </nav>
  )
}

export default Navbar