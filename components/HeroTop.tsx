import React from 'react'

export default function HeroTop(props:any ) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
              backgroundSize: ' cover',
        backgroundPosition: "bottom"
          }}
          className="h-72"
    >
      <div className="bg-black bg-opacity-55 py-9  grid justify-center items-center h-full   content-center text-center">
        <div className="mb-1">
                  <h1 className="text-3xl font-bold uppercase p-4" >{props.title} </h1>
                  <p className="text-xl capitalize border-b pb-2">{props.description }</p>
              </div>
              
      </div>
    </div>
  )
}