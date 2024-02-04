import HeroTop from '@/components/HeroTop'
import React from 'react'
import Form from './_components/Form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book',
  description: 'Experience the bounty of our region on your plate at XYZ. We proudly serve up dishes crafted with locally sourced ingredients, celebrating the tastes and traditions of our community. Join us for a culinary adventure that nourishes your senses and supports your neighbors..',
}
function Book() {
  return (
    <>
      <HeroTop title='Book' description="Now You Can Book your table!" image='/booking.jpg' position='center' />
      <Form />
    </>
  )
}

export default Book