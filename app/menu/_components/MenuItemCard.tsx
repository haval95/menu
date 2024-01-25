import React from 'react'
import Image from 'next/image'
import Type from '../../../components/Type'
import AddItemButton from '@/components/buttons/AddItemButton'

function Card({menuitem}:{menuitem : MenuItem}) {
  

  return (
        <div className="card w-80 bg-white shadow-xl text-black m-10 border-2 ">
        <figure className="relative overflow-hidden   h-52">
        <Image
          style={{ objectFit: 'cover' }}
          width ={1000}
          height ={1000}
                className="transform transition duration-700 hover:scale-125"
                src={menuitem.image.url}
                alt="guyWithBurger"
                />
        <h1 className="absolute bottom-0 right-0 glass rounded-t-full px-5     z-30 bg-yellow-400  shadow-2xl p-2 rounded-xl">${ menuitem.price}</h1>
            </figure>
          <div className="card-body relative">
            
              <h2 className="card-title">
          <Type text={Array.from([menuitem.name])} loop={false} cursor={false}  />
              </h2>
            <p>Some Description will go here.</p>
            <div className="card-actions justify-end">
          <AddItemButton menuitem={menuitem}  />
            </div>
        </div>
        </div>
  )
}

export default Card