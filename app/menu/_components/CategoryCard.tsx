import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Type from '../../../components/Type';

function CategoryCard(props:any) {
   
  return (
       <Link href={`/menu/${props.category.slug}`}>
        <div className="card shadow-slate-500/50  w-80 bg-white shadow-xl text-black m-10 border-2 hover:shadow-none duration-500 cursor-pointer">
          
      <figure className="overflow-hidden   h-52 relative">
              <Image
              fill={true}
              className="transform transition duration-700 hover:scale-125"
              src={props.category.image?.url}
              alt="guyWithBurger"
              />
          </figure>
          <div className="card-body p-3">
          <h2 className="text-center card-title justify-center capitalize">
             <Type text={Array.from([props.category.name])} loop={false} cursor={false}  />
            </h2>
          </div>
      </div>
      </Link>
  )
}

export default CategoryCard