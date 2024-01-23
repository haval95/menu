

import HeroTop from "@/components/HeroTop"
import CategoriesList from '@/components/Menu/CategoriesList'
import {getCategoryList} from '@/services'
import { useEffect, useState } from 'react'
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Menu',
  description: 'we are showing our menu here.',
}



export default function Menu() {
  


  return (
      <>
      <HeroTop position={"bottom"} image="/menuTop.jpg" title="Menu" description="Welcome to our menu" />
        <CategoriesList  isCategory={true} />
        
    </>
  )
}
