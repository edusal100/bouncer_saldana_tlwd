import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
  return (
    <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
    {items.map((item)=>(
         <Item item={item}/>
         ))}
    </div>
  )
}
