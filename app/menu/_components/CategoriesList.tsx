
import React from 'react'
import CategoryCard from './CategoryCard'
import getAllCategories from '@/lib/getAllCategories'



export default async function  CategoriesList() {
  const categoriesData: Promise<Category[]> = getAllCategories();
  const categories = await categoriesData


  const content = (
    <div className=" flex justify-center flex-wrap">
      {
        categories.map(eachCategory => {
          return (
             <CategoryCard category={eachCategory} key={eachCategory.id} />
              
              )
        })
        }
    </div>
  )



  
  return (content)
}

