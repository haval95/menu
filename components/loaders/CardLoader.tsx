import React from 'react'

function CardLoader() {
  return (
    <div className="card border w-80 rounded-xl m-10">
  <div className="animate-pulse p-10  justify-center mx-auto flex-col text-center align-items-center gap-8">
    <div className=" flex justify-center  "><svg className=" text-gray-300 dark:text-gray-300 w-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg></div>
        <div className=" flex-col space-y-3 justify-center  py-4">
    <div className='h-4 bg-slate-300 w-full rounded-xl'></div>
    <div className='h-4 bg- w-full rounded-xl'></div>
    <div className='h-4 bg-slate-300 w-full rounded-xl'></div>
    <div className='h-4 bg-slate-300 w-full rounded-xl'></div>

        </div>

  </div>
</div>
  )
}

export default CardLoader