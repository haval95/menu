"use client"
import { useCart } from '@/context/use-cart'
import React from 'react'

function AddItemButton({menuitem}:{menuitem : MenuItem}) {
    const { addItem } = useCart()

    const handleClick = () => {
        addItem(menuitem)
    }
  return (
      <button
          onClick={handleClick}
      className={`btn   hover:bg-yellow-500 border-none rounded-full text-white shadow-md hover:shadow-none duration-500 bg-yellow-400  text-2xl`}
      > +
    </button>
  )
}

export default AddItemButton