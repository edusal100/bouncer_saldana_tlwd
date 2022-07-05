import React, {useState, useContext} from 'react'
import {Link} from "react-router-dom";
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';

export default function ItemDetail({product}) {

   const [irCarrito, setIrCarrito ] = useState(false)

   const {cartList, agregarAlCarrito} = useContext(CartContext)

   const onAdd = (cantidad) => {
      setIrCarrito(true)
      agregarAlCarrito({...product, cantidad: cantidad})
   }
  
  return (
    <div key={product.id} className='flex mt-8 gap-8'>
       <div>
          <img className='w-80' src={product.image} alt="" />
       </div>
       <div className='w-80'>
          <h2 className='font-bold text-xl mb-2'>{product.model}</h2>
          <h3 className='font-medium text-slate-500 mb-2'>${product.price}</h3>
          <p className='mb-8'>{product.description}</p>
          <p className='mb-2'>Stock: {product.stock}</p>
          {!irCarrito ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> :
          <Link to="/cart">
          <button className='mt-8 h-10 px-6 font-semibold rounded-md bg-black text-white'>Go to Cart</button>
          </Link>}
       </div>
    </div>
  )
}
