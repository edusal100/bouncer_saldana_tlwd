import React from 'react'

export default function Item({item}) {
  return (
    <div>
        <img className='w-full min-h-10 lg:h-100 mb-4 ' src={item.image} alt="" />
        <div className='flex justify-between'>
        <h3 className='text-center text-lg font-semibold'>{item.model}</h3>
        <h4 className='font-medium text-slate-500'>$ {item.price}</h4>
        </div>    
    </div>
  )
}
