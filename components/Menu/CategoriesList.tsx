"use client"
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { getCategoryList } from '@/services'



function CategoriesList(props: any) {

  const [categoryListData, setcategoryList] = useState<any>([])

  useEffect(() => {
    categoryList()
  }, [])

    const categoryList = async () => {
    const res:any = await getCategoryList();
      setcategoryList(res?.categories)
    
  }
  
  return (
      <div className=" flex justify-center flex-wrap"> 
          {
             categoryListData.map((category:any, index:number) =>(
               <CategoryCard category={category} key={index} />
            )) 
          }

    </div>
  )
}

export default CategoriesList