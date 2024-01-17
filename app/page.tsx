"use client"
import Hero from '@/components/Home/Hero'
import WhyUs from '@/components/Home/WhyUs'
import Card from '@/components/Menu/CategoryCard'
import CategoriesList from '@/components/Menu/CategoriesList'
import {getCategoryList} from '@/services'
import { useEffect, useState } from 'react'



export default function Home() {


  
  
  return (
    <div>
      <Hero />
      <WhyUs />
    
     
      
    </div>
  )
}
