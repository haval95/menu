import clsx from 'clsx'
import React from 'react'

function Button({color="yellow", label="submit", onSumbit}:{onSumbit:any, color?:String, label?:String}) {
  return (
      <button onClick={onSumbit} className={clsx(`bg-${color}-500 rounded-2xl py-1 px-6 capitalize shadow-lg hover:shadow-none duration-500 hover:bg-${color}-600 justify-self-center `)}>
          {label}
    </button>
  )
}

export default Button