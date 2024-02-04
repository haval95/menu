import clsx from 'clsx'
import React from 'react'

function Input({type="text", label="input title", showLabel="inline" }:{type:string, label:string, showLabel:string}) {
  return (
      <div className={clsx("capitalize gap-1 w-full",{  " flex flex-col": showLabel==="top", "flex space-x-2": showLabel==="inline" })}>
          <label >{label}:</label>
          <input type={type} placeholder={label}  className='bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500'/>
    </div>
  )
}

export default Input    