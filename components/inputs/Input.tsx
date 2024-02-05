import clsx from 'clsx'
import React from 'react'




function Input({outlineColor="yellow-500", textColor="black", other, name, onInputChange, InputType = "text", required = true, label = "input title", showLabel = "inline"  }:{outlineColor?: string, textColor?:string, other?:any, name:string, onInputChange:any ,required?:boolean, InputType:string, label:string, showLabel?: 'top' | 'inline' | "none";}) {
  return (
      <div className={clsx(`capitalize text-${textColor} gap-1 w-full`,{  " grid ": showLabel==="top" || showLabel ==="none", "grid grid-cols-3": showLabel==="inline" })}>
          <label className={clsx("", {"hidden": showLabel==="none"})}>{label}:</label>
      <input type={InputType} placeholder={label} required={required} {...other}
        name={name}
        onChange={onInputChange}
      className={`col-span-2 bg-white border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-${outlineColor} `} />
    </div>
  )
}

export default Input    