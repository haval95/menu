import AddItemButton from '@/components/buttons/AddItemButton'
import RemoveItemButton from '@/components/buttons/RemoveItemButton'
import { useCart } from '@/context/use-cart'
import React from 'react'

function OrderDetail() {
    const { items } = useCart()
    const total = items.reduce((total, item) => total += (item.price*item.quantity), 0)
    const convertCartItemToMenuItem = (cartItem: CartItem): MenuItem => {
        const { quantity, ...menuItem } = cartItem;
        return menuItem;
    };
    
    return (
      <>
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 border">
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

              {items.map((item) => {
                  return (
                      <tr key={item.id} className="even:bg-white even:dark:bg-gray-200 odd:bg-white odd:dark:bg-white border-b dark:border-white">
                          <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                              {item.name}
                          </th>
                          <td className="text-black px-6 py-4">
                              {item.quantity}
                          </td>
                          <td className="text-black px-6 py-4">
                              $ {item.price}
                          </td>
                          <td className="text-black px-6 py-4">
                              ${item.price * item.quantity}
                          </td>
                          <td className="text-black px-6 py-4 text-2xl flex space-x-2 items-center text-center ">
                              <AddItemButton menuitem={convertCartItemToMenuItem(item)}  />
                              <span> |</span>
                              <RemoveItemButton menuitem={item}  />
                          </td>
                      </tr>

                  )
              })
            
   
              }
                
                </tbody>
                 <tfoot className='text-black border-t-2 text-center text-lg font-bold bg-slate-100'>
        <tr>
            <td colSpan={3}> Total:</td>
            <td className="px-6 py-3">
                ${total}
            </td>
            <td></td>
        </tr>
    </tfoot>
      </table>
      </>
  )
}

export default OrderDetail