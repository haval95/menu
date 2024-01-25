"use client"
import HeroTop from '@/components/HeroTop'
import ClearCartButton from '@/components/buttons/ClearCartButton'
import OrderDetail from '../../components/OrderDetail'
import { useCart } from '@/context/use-cart'

import Link from 'next/link'
import OrderButton from '@/components/buttons/OrderButoon'



function Cart() {
    const { items } = useCart()



  return (
      <>
        <HeroTop position={"center"}  image="/cartHero.jpg" title={"Cart"} description="" /> 
        <div className="flex text-black justify-center">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 mt-10">
                {
                items.length
                    ?
                        <div className="flex flex-col space-y-5 items-center">
                            <OrderDetail />
                              <div className="flex space-x-5 items-end self-end">
                                  <ClearCartButton />
                                  <OrderButton />
                            </div>
                        </div>
                    :
                    <div className='flex  flex-col items-center space-y-2'>
                      <h1> Sorry You Don't have any items in your cart! </h1>
                      <h1 className='pb-6'> to add some items go back to menu </h1>
                        <Link href={"/menu"} className="font-bold text-lg shadow-xl rounded-lg px-6 py-1 hover:shadow-none duration-500 text-white  bg-yellow-400">Menu</Link>
                    </div>
                
                }        
            </div>
        </div>
      </>
  )
}

export default Cart