"use client"
import React, { useState, useEffect } from 'react'
import { UserButton, useSession } from '@clerk/nextjs'
import { useUser } from "@clerk/nextjs";
import Image from "next/legacy/image"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { SignInButton } from "@clerk/nextjs";
function Navbar() {

 const { isSignedIn, user, isLoaded } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
   const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" }, 
    {name:"Book", href: "/book"}
  ]

  if (isSignedIn) {
   //console.log(user)
  }
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
          {navLinks.map(link => {
          const isActive = (pathname === '/' && link.href === '/') || (pathname !== '/' && (pathname === link.href || pathname.startsWith(link.href + '/')));

            return   (
              <Link href={link.href} key={link.name} className={`${isActive ? "text-yellow-500 border-b pb-1 border-yellow-500" : ""} cursor-pointer duration-500 hover:text-yellow-200`}>{ link.name}</Link>
            )
          })}
           
          </div>
        {isSignedIn ?
          <div className=' pl-2 rounded-2xl  bg-white cursor-pointer'>
            <UserButton showName={true} userProfileMode={"modal"} />
          </div>
          :
          <div className="bg-white text-yellow-600 px-3 rounded-xl py-1 shadow-xl">
            <SignInButton  mode='modal' />
          </div>
        } 
         </div>
    </nav>
  )
}

export default Navbar