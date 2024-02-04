import HeroTop from "@/components/HeroTop"
import { IoArrowBackCircle } from "react-icons/io5";
import Link from "next/link"
import MenuItemsWrapper from "@/app/menu/_components/MenuItemsWrapper";
import { Suspense } from "react";
import CardSkellton from "@/components/loaders/cardSkellton";
import HeroLoader from "@/components/loaders/HeroLoader";
import { Metadata } from "next";

type Params = {
  params: {
    categoryslug: string
  }
}

export async function generateMetadata({ params: { categoryslug } }: Params): Promise<Metadata> {
    return {
    title: categoryslug,
  }
}


export default async function MenuItems({ params: {categoryslug} }: Params) {
  
  return (
    <>
      <Suspense fallback={<HeroLoader />}>
         <HeroTop position={undefined}  image="/menuTop.jpg" title={categoryslug} description="Welcome to our menu" /> 
     </Suspense>
      <div className=" flex justify-center m-10  flex-wrap">
        <Link href="/menu" className="btn bg-white border-1 hover:bg-white hover:shadow-none hover:border-gray-200 px-8 border-gray-200 shadow-xl text-black ">
            <IoArrowBackCircle className="text-yellow-500 animate-back text-2xl" /> Main
        </Link>
      </div>
        <Suspense fallback={<CardSkellton />}>
            <MenuItemsWrapper categoryslug={categoryslug} />
        </Suspense>
    </>
  )
}
