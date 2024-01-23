import HeroTop from '@/components/HeroTop'

import React from 'react'

function Cart() {

    

  return (
      <>
        <HeroTop position={"center"}  image="/cartHero.jpg" title={"Cart"} description="" /> 
         <div className="flex text-black justify-center">
            

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-yellow-500 dark:text-black">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Item name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Total Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="even:bg-white even:dark:bg-yellow-100 odd:bg-white odd:dark:bg-white border-b dark:border-white">
                    <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="text-black px-6 py-4">
                        Silver
                    </td>
                    <td className="text-black px-6 py-4">
                        Laptop
                    </td>
                    <td className="text-black px-6 py-4">
                        $2999
                    </td>
                    <td className="text-black px-6 py-4 text-2xl flex space-x-2">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">+  </a>
                                    <span> |</span>
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">-  </a>
                    </td>
                </tr>
            
                
            </tbody>
        </table>
    </div>

            </div>
      </>
  )
}

export default Cart