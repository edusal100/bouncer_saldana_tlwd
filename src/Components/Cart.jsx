import React, {useContext} from 'react'
import { CartContext } from './CartContext'


export default function Cart() {

  const {cartList, eliminarItem, vaciarCarrito} = useContext(CartContext)

  return ( 
    <div>
        <div className='bg-slate-100 text-center py-10 lg:py-14 mb-4 text-4xl font-extrabold'>Shopping Cart</div>
        <div className='hidden lg:flex justify-between mb-4'>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr className='mb-6'/>
      {cartList.map(prod =>
      <div className='flex justify-between items-center' key={prod.id}>
        <div className='flex items-center font-bold'>
            <img className='w-28 lg:w-16' src={prod.image} alt="" /> 
          </div>
          <div className='lg:flex items-center gap-40'>
            <p className='font-bold text-2xl lg:text-xl'>{prod.model}</p>
            <p>${prod.price}</p>
            <p>{prod.cantidad}</p>
            </div>
            <div className='flex gap-6'>
            <p className='font-bold text-2xl lg:text-xl'>${prod.price * prod.cantidad}</p>
            <img onClick={()=> eliminarItem(prod.id)} className='h-4' src={require('../images/remove.png')} alt="" />
            </div>
      </div>
      )} 
      <button onClick={vaciarCarrito} className="mt-6 h-10 px-6 font-semibold rounded-md bg-black text-white" >Empty Cart</button> 
      </div> 
  ) 
}
