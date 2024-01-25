"use client"
import { useCart } from '@/context/use-cart'
import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
function ClearCartButton() {
    const { clearCart } = useCart()

    const handleClick = () => {
        
        clearCart()
    }
  return (
      <button
          onClick={handleClick}
      className="p-3  rounded-full text-center flex items-center space-x-3   px-8    text-red-600 border-none  shadow-md hover:shadow-none duration-500 bg-slate-100  "
      >
        <span>Delete</span> <MdDeleteOutline className='text-2xl '/> 
    </button>
  )
}

export default ClearCartButton