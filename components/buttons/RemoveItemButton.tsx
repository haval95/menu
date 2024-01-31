
import { useCart } from '@/context/use-cart'
import React from 'react'
import toast from 'react-hot-toast';;
import { MdOutlineDelete } from "react-icons/md";
function RemoveItemButton({menuitem}:{menuitem : CartItem}) {
    const { removeItem } = useCart()

    const handleClick = () => {
      removeItem(menuitem.id)
      toast((t) => (
      <div className={` `}>
      <span className='flex gap-4'> <MdOutlineDelete className='text-red-400 text-2xl '/> <div className={`${t.visible ? 'animate-bounce' : 'animate-leave'}`}> {menuitem.name} Deleted!</div> </span>
      </div>
    ));
    }
  return (
      <button
          onClick={handleClick}
      className="btn   hover:bg-red-600 rounded-full border-none text-white shadow-md hover:shadow-none duration-500 bg-red-400  text-2xl"
      >
         -
    </button>
  )
}

export default RemoveItemButton