
import React from 'react'
import MenuItemCard from './MenuItemCard'
import { getMenuItemsByCategory } from '@/lib/getMenuItemsByCategory';
import { notFound } from 'next/navigation';
import { gql, useQuery } from '@apollo/client';
type Props = {
  categoryslug:  string
}
export default async function CategoriesList({ categoryslug }: Props) {
  
  const MenuItemsData: Promise<MenuItem[]> = getMenuItemsByCategory(categoryslug);
  const MenuItems = await MenuItemsData

  if (!MenuItems) {
    notFound()
  }
  const content = (
    <div className=" flex justify-center flex-wrap">
      {
        MenuItems.map(item => {
          return (
             <MenuItemCard menuitem={item} key={item.id} />
              
              )
        })
        }
    </div> 
  ) 
  
  return (content)
}

