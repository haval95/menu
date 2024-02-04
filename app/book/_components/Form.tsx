import React from 'react'
import Input from './Input'

function Form() {
  return (
     
      <form className={` text-black flex items-center justify-center pt-14 max-w-screen-lg mx-auto`}>
          
              <Input required type="text" label='Full Name' showLabel='top'  />
          </form>

    
  )
}

export default Form