"use client"
import React, { useState, useEffect, Suspense } from 'react'
import { UserButton, UserProfile } from '@clerk/nextjs'
import { useUser } from "@clerk/nextjs";
import Image from "next/legacy/image"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { SignInButton } from "@clerk/nextjs";
import { FaShoppingBasket } from "react-icons/fa";

import clsx from "clsx"
import { useCart } from '@/context/use-cart';
import UserSkilliton from './loaders/UserSkilliton';
import { IoMdLogIn } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {

  const { items } = useCart()
  
 const { isSignedIn, user, isLoaded } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname()
  const [length, setLength] = useState(items.length)
  const [mobileMenu, setmobileMenu] = useState(true)
useEffect(() => {
    const totalQuantity = items.reduce(
        (total, item) => total + item.quantity, 0
    );
    setLength(totalQuantity);
}, [items]);



  
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
      <nav className={`fixed top-0 w-screen sm:p-4  m-0 z-50  sm:h-16 duration-500  flex  inset-x-0   items-center justify-between  mx-0 sm:px-5  shadow-sm text-xl  bg-white text-black ${
        isScrolled ? 'sm:bg-white  sm:text-black' : 'sm:bg-transparent  sm:text-white'
      }`}>
      <div className="grid grid-cols-1 sm:flex  sm:w-full z-50 w-screen duration-500 relative   ">
        <div className="z-50 px-4 w-full max-w-screen-xl  h-16  sm:bg-transparent flex shadow-md sm:shadow-none bg-white items-center justify-between flex-nowrap  mx-auto ">
          <div className="hidden sm:block  ">
            <Image src='/logo.webp' alt="logo" width={75} height={75} />
          </div>
          <button onClick={()=>setmobileMenu(!mobileMenu)} className="inline-block sm:hidden  basis-1/3 sm:basis-0  duration-500  text-3xl text-black font-extrabold">
           {mobileMenu ? <MdOutlineMenu />:<IoCloseSharp />}
          </button>
          <div className="sm:hidden  text-center basis-1/3 sm:basis-0   block px-6">
            <Image src='/logo.webp' alt="logo" width={75} height={75} />
          </div>
          <div className="sm:flex gap-8 md:gap-16 hidden" id="navbarLinks-pc">
            {navLinks.map(link => {
                      return   (
                <Link href={link.href} key={link.name} className={clsx('cursor-pointer duration-500 hover:text-yellow-200', {
                  "text-yellow-500 border-b pb-1 border-yellow-500": pathname ===link.href
                })}>{ link.name}</Link>
              )
            })}
            
          </div>
          <div className="flex space-x-3 md:space-x-5 basis-1/3  sm:basis-auto  justify-end " id='signedin-cart-section'>

            {isLoaded
              ?
                isSignedIn ?
                  <>
                  <Link href="/cart" className="text-3xl text-yellow-300 relative">  <FaShoppingBasket />
                    <div className={`${length ? "animate-bounce" : " "} absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900`}>{length}</div>
                  </Link>
                    <div className=' pl-2 rounded-2xl  bg-white cursor-pointer hidden md:block capitalize'>
                      <UserButton showName={true} userProfileMode={"modal"} afterSignOutUrl={pathname} userProfileUrl="/profile"  />       
                  </div>
                  <div className=' pl-2 rounded-2xl   cursor-pointer md:hidden block'>
                    <UserButton showName={false} userProfileMode={"modal"} afterSignOutUrl={pathname} />
                  </div>
                  </>
                  :
                <>
                  <div className="hidden sm:flex">
                    <div className=" text-yellow-600 px-1 hidden   rounded-xl py-1 shadow-xl cssbuttons-io-button   ">
                    Sign in
                    <SignInButton mode='modal' >
                    <div className="icon text-xl">
                      <IoMdLogIn />
                    </div>
                      </SignInButton>
                        </div>
                    </div>
                  <div className=" text-yellow-500 border border-yellow-500  px-3   sm:hidden rounded-xl py-1    ">
                <span className='text-wrap' ></span>
                  <SignInButton mode='modal' >
                Sign in
                    </SignInButton>
                  </div>
                  
                    </>
              
              :
              <UserSkilliton />
            }

          </div>
        </div>
        <div className={clsx(" rounded-b-full text-center   w-screen  sm:hidden -top-32   absolute z-10 bg-yellow-100  border-b-[5px] border-yellow-400 ",
          { "translate-y-full duration-700 ": !mobileMenu, "-translate-y-full duration-700 ": mobileMenu })} id="navbarLinks-mobile">
          <div className={clsx("grid rounded-b-full       sm:hidden       border-b-[3px] border-green-500 shadow-inner ")}>
                      <div className={clsx("grid rounded-b-full   pt-4    sm:hidden    border-b-[5px]   border-yellow-500 shadow-lg  ")}>
             {navLinks.map(link => {
                    return   (
              <Link onClick={()=>setmobileMenu(!mobileMenu)} href={link.href} key={link.name} className={clsx('cursor-pointer pb-3  duration-500 hover:text-yellow-200', {
                 "text-yellow-600   ": pathname ===link.href
              })}>{ link.name}</Link>
            )
          })}
         </div>
           
            </div>
        </div>
        
    </div>
    </nav>
  )
}

export default Navbar