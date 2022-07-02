import React from 'react'
import ItemCount from './ItemCount';

export default function ItemDetail({product}) {
  
  return (
    <div key={product.id} className='flex mt-8 gap-8'>
       <div>
          <img className='w-80' src={product.image} alt="" />
       </div>
       <div className='w-80'>
          <h2 className='font-bold text-xl mb-2'>{product.model}</h2>
          <h3 className='font-medium text-slate-500 mb-2'>${product.price}</h3>
          <p className='mb-8'>{product.description}</p>
          <ItemCount stock={15} initial={1}/>
          <button className='mt-8 h-10 px-6 font-semibold rounded-md bg-black text-white'>Add to Cart</button>
       </div>
    </div>
  )
}
