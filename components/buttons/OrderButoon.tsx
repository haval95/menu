"use client"
import { useCart } from '@/context/use-cart'
import React from 'react'
import { IoIosSend } from "react-icons/io";
function OrderButton() {
    const { clearCart } = useCart()

    const handleClick = () => {
        
        clearCart()
    }
  return (
      <button
          onClick={handleClick}
      className="p-3  rounded-full text-center flex items-center space-x-3  border-none text-white shadow-md hover:shadow-none duration-500 px-8 bg-yellow-500  "
      >
          <span>Order</span> <IoIosSend className='text-2xl'/>
    </button>
  )
}

export default OrderButton