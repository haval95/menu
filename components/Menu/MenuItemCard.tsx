import React, { useState } from 'react'
import Image from 'next/image'
function Card(props:any) {
  const [menuItem, setMenuItem] = useState(props.menuitem)
  
  console.log(menuItem)
   
  return (
        <div className="card w-80 bg-white shadow-xl text-black m-10 border-2">
        <figure className="relative overflow-hidden   h-52">
        <Image
              objectFit='cover'
                fill={true}
                className="transform transition duration-700 hover:scale-125"
                src={menuItem.image.url}
                alt="guyWithBurger"
                />
        <h1 className="absolute bottom-0 right-0 glass rounded-t-full px-5     z-30 bg-yellow-400  shadow-2xl p-2 rounded-xl">${ menuItem.price}</h1>
            </figure>
          <div className="card-body relative">
            
              <h2 className="card-title">
                {menuItem.name}
              </h2>
            <p>Some Description will go here.</p>
            <div className="card-actions justify-end">
            <button className="btn glass hover:bg-yellow-500 border-none text-white shadow-md hover:shadow-none duration-500 bg-yellow-400  text-2xl">+</button>
            </div>
        </div>
        </div>
  )
}

export default Card