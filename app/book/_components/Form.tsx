import React from 'react'
import Input from './Input'

function Form() {
  return (
     
      <form className={` text-black flex items-center justify-center pt-14 max-w-screen-lg mx-auto`}>
          
              <Input type="text" label='Full Name' showLabel='inline'  />
          </form>

    
  )
}

export default Form