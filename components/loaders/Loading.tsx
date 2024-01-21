import CardLoader from '@/components/loaders/CardLoader'
import HeroLoader from '@/components/loaders/HeroLoader'
import React from 'react'

function Loading() {
  return (
    <>
      <HeroLoader />
      <div className="flex flex-wrap justify-center">
        <CardLoader /><CardLoader /><CardLoader />

      </div>
    </>
  )
}

export default Loading