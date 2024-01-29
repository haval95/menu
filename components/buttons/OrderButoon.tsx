"use client"
import { useCart } from '@/context/use-cart'
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { useUser } from "@clerk/nextjs";
import { MakeOrder } from '@/lib/postOrder';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
 

function OrderButton() {
    const { items, clearCart } = useCart()
    const { user } = useUser();
    const [ordersent, setordersent] = useState(false)
    const router = useRouter()
    
    const handleClick = async () => {
        
        const result = await MakeOrder(items, user) as { createOrder: any };
        if (result.createOrder) {
            setordersent(true)
        }
            

    }
    useEffect(() => {
        if (ordersent) {
            clearCart();
            router.push("/menu")
            toast(
            "Now you can start making new orders!",
            {
                duration: 6000, 
                style: {
                borderRadius: '10px',
                background: '#f8ea24',
                color: '#000000',
                },
            }
);
        }
  }, [ordersent]);

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