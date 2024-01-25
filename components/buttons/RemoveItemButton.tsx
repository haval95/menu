"use client"
import { useCart } from '@/context/use-cart'
import React from 'react'
import toast from 'react-hot-toast';;

function RemoveItemButton({menuitem}:{menuitem : CartItem}) {
    const { removeItem } = useCart()

    const handleClick = () => {
      removeItem(menuitem.id)
      toast.error((t) => (
      <div className={` ${t.visible ? 'animate-bounce' : 'animate-leave'}`}>
       {menuitem.name} Deleted! 
      </div>
    ));
    }
  return (
      <button
          onClick={handleClick}
      className="btn   hover:bg-yellow-500 rounded-full border-none text-white shadow-md hover:shadow-none duration-500 bg-red-400  text-2xl"
      >
         -
    </button>
  )
}

export default RemoveItemButton