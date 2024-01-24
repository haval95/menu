import CardLoader from '@/components/loaders/CardLoader'
import HeroLoader from '@/components/loaders/HeroLoader'
import React from 'react'

function CardSkellton() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <CardLoader /><CardLoader /><CardLoader />
        <CardLoader /><CardLoader /><CardLoader />
        <CardLoader />
        <CardLoader />

      </div>
    </>
  )
}

export default CardSkellton