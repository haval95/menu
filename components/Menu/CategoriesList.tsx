import React from 'react'
import CategoryCard from './CategoryCard'

function CategoriesList(props: any) {
        
  return (
      <div className=" flex justify-center flex-wrap"> 
          {
             props.categories.map((category:any, index:number) =>(
                <CategoryCard category={category} />
            )) 
          }

    </div>
  )
}

export default CategoriesList