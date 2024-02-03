import HeroTop from '@/components/HeroTop'
import React from 'react'
import Form from './_components/Form'

function Book() {
  return (
    <>
      <HeroTop title='Book' description="Now You Can Book your table!" image='/booking.jpg' position='center' />
      <Form />
    </>
  )
}

export default Book