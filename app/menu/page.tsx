"use client"

import HeroTop from "@/components/HeroTop"



import CategoriesList from '@/components/Menu/CategoriesList'
import {getCategoryList} from '@/services'
import { useEffect, useState } from 'react'

export default function Menu() {
  
const [categoryListData, setcategoryList] = useState<any>([])

  useEffect(() => {
    categoryList()
  }, [])

    const categoryList = async () => {
    const res:any = await getCategoryList();
      setcategoryList(res?.categories)
    
  }

  return (
      <>
        <HeroTop image="/menuTop.jpg" title="Menu" description="Welcome to our menu" />
        <CategoriesList categories ={categoryListData} />
        
    </>
  )
}
