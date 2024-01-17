import React, { useState } from 'react'

function Card(props:any) {
    const [category, setcategory] = useState(props.category)
   
  return (
        <div className="card w-80 bg-white shadow-xl text-black m-10 border-2">
          <figure className="relative"><img src="https://images.aws.nestle.recipes/resized/0a0717810b73a1672a029c29788e557b_creamy_alfredo_pasta_long_left_1080_850.jpg" alt="Shoes" />
                <h1 className="absolute bottom-0 right-0 glass rounded-t-full px-5     z-30 bg-yellow-400  shadow-2xl p-2 rounded-xl">12$</h1>
          </figure>
          <div className="card-body relative">
            
              <h2 className="card-title">
                {category.name}
              </h2>
            <p>this includes things like pasta and chickedn</p>
            <div className="card-actions justify-end">
            <button className="btn glass hover:bg-yellow-500 border-none text-white shadow-md hover:shadow-none duration-500 bg-yellow-400  text-2xl">+</button>
            </div>
        </div>
        </div>
  )
}

export default Card