"use client"
import { useCart } from '@/context/use-cart'
import { SignIn, SignInButton, SignedIn, useUser } from '@clerk/nextjs';
import React from 'react'
import toast from 'react-hot-toast';;

import { useRouter } from 'next/navigation';
async function AddItemButton({ menuitem }: { menuitem: MenuItem }) {
  const { isSignedIn } = useUser()
  const router = useRouter()
    const { addItem } = useCart()

const handleClick = async () => {
  if (isSignedIn) {
    await addItem(menuitem);
    toast.success((t) => (
      <div className={` ${t.visible ? 'animate-bounce' : 'animate-leave'}`}>
        {menuitem.name} added!
      </div>
    ));
  } else {
      router.push("/sign-in")
    }
  };
  


  return (
              
                      
      <button
          onClick={handleClick}
      className={`btn   hover:bg-yellow-500 border-none rounded-full text-white shadow-md hover:shadow-none duration-500 bg-yellow-400  text-2xl`}
      > +
      </button>
     
  )
}

export default AddItemButton