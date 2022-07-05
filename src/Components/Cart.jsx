import React, {useContext} from 'react'
import { CartContext } from './CartContext'


export default function Cart() {

  const {cartList, eliminarItem, vaciarCarrito} = useContext(CartContext)

  return ( 
    <div>
        <div className='hidden lg:flex justify-between mb-6' >
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr className='mb-6'/>
      {cartList.map(prod =>
      <div className='flex justify-between mb-4 items-center' key={prod.id}>
        <div className='flex items-center gap-8 font-bold'>
            <img className='w-16' src={prod.image} alt="" />
            <p>{prod.model}</p>
          </div>
            <p>${prod.price}</p>
            <p>{prod.cantidad}</p>
            <div className='flex gap-4'>
            <p>${prod.price * prod.cantidad}</p>
            <img onClick={()=> eliminarItem(prod.id)} className='h-4' src={require('../images/remove.png')} alt="" />
            </div>
      </div>
      )} 
      <button onClick={vaciarCarrito} className="mt-6 h-10 px-6 font-semibold rounded-md bg-black text-white" >Empty Cart</button> 
      </div> 
  ) 
}
