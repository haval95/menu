import clsx from 'clsx'
import React from 'react'

function Input({ type = "text", required = true, label = "input title", showLabel = "inline"  }:{required?:boolean, type:string, label:string, showLabel?: 'top' | 'inline';}) {
  return (
      <div className={clsx("capitalize gap-1 w-full",{  " flex-col space-y-1 ": showLabel==="top", "flex items-center space-x-4": showLabel==="inline" })}>
          <label className="flex-1">{label}:</label>
          <input type={type} placeholder={label} required={true}  className='flex-1 bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500'/>
    </div>
  )
}

export default Input    