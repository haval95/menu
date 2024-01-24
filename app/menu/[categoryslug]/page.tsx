"use client"
import HeroTop from "@/components/HeroTop"
import MenuItemCard from '@/components/Menu/MenuItemCard'
import Loading from "@/components/loaders/Loading"
import { IoArrowBackCircle } from "react-icons/io5";
import {getCategoryBySlug} from '@/services'
import Link from "next/link"
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
            
            <div className=" flex justify-center m-10  flex-wrap">
              <Link href="/menu" className="btn bg-white border-1 hover:bg-white hover:shadow-none hover:border-gray-200 px-8 border-gray-200 shadow-xl text-black ">
                 <IoArrowBackCircle className="text-yellow-500 animate-back text-2xl" /> Main
              </Link>
            </div>
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
