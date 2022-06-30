import React from 'react'
import ItemCount from './ItemCount';

export default function ItemDetail({product, stock}) {
  console.log(product.brand);
  return (
    <div className='flex mt-8 gap-8'>
       <div>
          <img className='w-80' src={product.image} alt="" />
       </div>
       <div>
          <h2 className='font-bold text-xl '>{product.model}</h2>
          <h3 className='font-medium text-slate-500'>${product.price}</h3>
          <p>{product.description}</p>
          <ItemCount stock={15} initial={1}/>
       </div>
    </div>
  )
}
