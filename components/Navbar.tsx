"use client"
import React, { useState, useEffect } from 'react'
import {UserButton} from '@clerk/nextjs'
import Image from "next/legacy/image"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
function Navbar() {


  const [isScrolled, setIsScrolled] = useState(false);
   const pathname = usePathname()

  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 25);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <nav className={`fixed top-0 w-full p-4 hidden z-50  h-16 duration-500  sm:flex inset-x-0 items-center justify-between  mx-auto px-5  shadow-sm text-xl ${
        isScrolled ? 'bg-white shadow text-black' : 'bg-transparent  text-white'
      }`}>
      <div className=" w-full max-w-screen-xl   sm:flex inset-x-0 items-center justify-between  mx-auto px-5">
         <Image src='/logo.webp' alt="logo" width={75} height={75} />
          <div className="flex gap-16">
              <Link href="/" className={`${pathname == "/" ? "text-yellow-500 border-b pb-1 border-yellow-500": ""} cursor-pointer duration-500 hover:text-yellow-200`}>Home</Link>
              <Link href="/about" className={`${pathname == "/about" ? "text-yellow-500 border-b pb-1 border-yellow-500": ""} cursor-pointer duration-500 hover:text-yellow-200`}>About</Link>
              <Link href="/menu" className={`${pathname == "/menu" ? "text-yellow-500 border-b pb-1 border-yellow-500": ""} cursor-pointer duration-500 hover:text-yellow-200`}>Menu</Link>
              <Link href="/book" className={`${pathname == "/book" ? "text-yellow-500 border-b pb-1 border-yellow-500": ""} cursor-pointer duration-500 hover:text-yellow-200`}>Book</Link>
          </div>
        <div className=' pl-2 rounded-2xl  bg-white cursor-pointer'><UserButton showName={true} userProfileMode={"modal"} /></div>
         </div>
    </nav>
  )
}

export default Navbar