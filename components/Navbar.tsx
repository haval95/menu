"use client"
import React, { useState, useEffect } from 'react'
import { UserButton, useSession } from '@clerk/nextjs'
import { useUser } from "@clerk/nextjs";
import Image from "next/legacy/image"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { SignInButton } from "@clerk/nextjs";
import { FaShoppingBasket } from "react-icons/fa";
import { GetCart } from '@/services';
import clsx from "clsx"

function Navbar() {
  

 const { isSignedIn, user, isLoaded } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname()
  const [length, setlength] = useState(0)

  useEffect(() => {
    GetCartItems();
    
  }, [])

  

  const GetCartItems = async () => {
        const res: any = await GetCart("haval");
    setlength(res.cart.cartitems.length)

  }

  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" }, 
    {name:"Book", href: "/book"}
  ]

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
                    return   (
              <Link href={link.href} key={link.name} className={clsx('cursor-pointer duration-500 hover:text-yellow-200', {
                 "text-yellow-500 border-b pb-1 border-yellow-500": pathname ===link.href
              })}>{ link.name}</Link>
            )
          })}
           
        </div>
        <div className="flex space-x-5">
          <Link href="/cart" className="text-3xl text-yellow-300 relative">  <FaShoppingBasket />
            <div className={`${length ? "animate-bounce" : " "} absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900`}>{length}</div>
          </Link>
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
         </div>
    </nav>
  )
}

export default Navbar