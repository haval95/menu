"use server"
import React from 'react'
import CategoryCard from './CategoryCard'
import getAllCategories from '@/lib/getAllCategories'



export default async function  CategoriesList() {
  const categoriesData: Promise<Category[]> = getAllCategories();
  const categories = await categoriesData


  const content = (
    <div className="w-screen  flex justify-center">
    <div className="flex 2xl:mx-14  w-full  max-w-screen-2xl  justify-center items-center flex-wrap gap-14 mt-14 mb-14  ">
      {
        categories.map(eachCategory => {
          return (<CategoryCard category={eachCategory} key={eachCategory.id} />)
        })
      }
      </div>
      </div>
  )

  return (content)
}

export async function generateStaticParams() {
    const categoriesData: Promise<Category[]> = getAllCategories();
  const categories = await categoriesData
  
  return (
    categories.map(eachCategory => ({
      categoryslug: eachCategory.slug
    }))
  )

  
}

