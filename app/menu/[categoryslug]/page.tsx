"use client"
import HeroTop from "@/components/HeroTop"
import MenuItemCard from '@/components/Menu/MenuItemCard'
import CardLoader from "@/components/loaders/CardLoader"
import HeroLoader from "@/components/loaders/HeroLoader"
import Loading from "@/components/loaders/loading"

import {getCategoryBySlug} from '@/services'
import { useEffect, useState } from 'react'

export default function MenuItems({params}) {
  
const [menuItemsData, setMenuItemsData] = useState<any>([])
  useEffect(() => {
      getMenuItems();
  }, [])

    const getMenuItems = async () => {
    const res:any = await getCategoryBySlug(params.categoryslug);
      setMenuItemsData(res?.category)
   
  }



  return (
   
    <>
      {
        menuItemsData.menuItems
          ? 
          <>
            <HeroTop position={null}  image="/menuTop.jpg" title={menuItemsData.name} description="Welcome to our menu" /> 
            <div className=" flex justify-center flex-wrap">
     
              {menuItemsData.menuItems.map((item: any, index: number) => {
                return <MenuItemCard menuitem={item} key={index} />
              })
              }
              </div>
         
          </>
          :
          <Loading />
      }
    
        
    </>
  )
}
