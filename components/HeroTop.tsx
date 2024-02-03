import React from 'react'
import Type from './Type';
export default function HeroTop(props: {title: string; image: string; position?: 'top' | 'center' | 'bottom'; description: string; }) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
              backgroundSize:`cover`,
        backgroundPosition: `${props.position ? props.position : "bottom" }`
          }}
          className="h-72 w-full"
    >
      <div className="bg-black bg-opacity-55 py-9  grid justify-center items-center h-full   content-center text-center">
        <div className="mb-1">
               
          <h1 className="text-3xl font-bold uppercase p-4 text-white" >
              
               <Type text={Array.from([props.title])} loop={false} cursor={false} />
          </h1>
                  <p className={`${props.description ? " text-white text-xl capitalize border-b pb-2 text-wite": "hidden"}`}>{props.description }</p>
              
               
        </div>
              
      </div>
    </div>
  )
}