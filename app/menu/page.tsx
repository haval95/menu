import HeroTop from "@/components/HeroTop"
import CategoriesList from '@/app/menu/_components/CategoriesList'
import HeroLoader from "@/components/loaders/HeroLoader"
import CardSkellton from "@/components/loaders/cardSkellton"
import { Metadata } from "next"
import { Suspense } from "react"


export const metadata: Metadata = {
  title: 'Menu',
  description: 'we are showing our menu here.',
}


export default function Menu() {
  
  return (
    <>
      <Suspense fallback={<HeroLoader />}>
        <HeroTop position={"bottom"} image="/menuTop.jpg" title="Menu" description="Welcome to our menu" />
      </Suspense>
      <Suspense fallback={<CardSkellton />}>
        <CategoriesList />
      </Suspense>
    </>
  )
}
