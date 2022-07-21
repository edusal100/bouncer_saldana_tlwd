import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'


export default function Cart() {

  const {cartList, eliminarItem, vaciarCarrito, totalBuy} = useContext(CartContext)

  return ( 
    <div>
        <div className='bg-slate-100 text-center py-10 lg:py-14 mb-4 text-4xl font-extrabold'>Shopping Cart</div>
        {cartList.length   === 0 ?
        <div className='flex flex-col items-center mb-4'>
          <h3 className='text-xl my-10'>You're cart is empty</h3>
          <Link to="/">
          <button className='h-10 px-6 font-semibold rounded-md bg-black text-white'>Go back to Store</button>
          </Link>
      </div> :
      <div>
        <div className='hidden lg:flex justify-between mb-4'>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr className='mb-6'/>
      {cartList.map (prod =>
      <div>
      <div className='flex justify-between items-center mb-4' key={prod.id}>
        <div className='flex items-center font-bold'>
            <img className='w-28 lg:w-16' src={prod.image} alt="" /> 
          </div>
          <div className='lg:flex items-center gap-40'>
            <p className='font-bold text-2xl lg:text-xl'>{prod.model}</p>
            <p>${prod.price}</p>
            <p>{prod.cantidad}</p>
            </div>
            <div className='flex gap-6 items-center'>
            <p className='font-bold text-2xl lg:text-xl'>${prod.price * prod.cantidad}</p>
            <img onClick={()=> eliminarItem(prod.id)} className='h-4 cursor-pointer' src={require('../images/remove.png')} alt="" />
            </div>
      </div>
      <hr className='mt-6 mb-6'/>
      </div>
      )}
      <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
      <button onClick={vaciarCarrito} className="h-10 px-6 font-semibold rounded-md bg-black text-white" >Empty Cart</button>
      <Link to="/checkout">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">Proccess Purchase</button>
      </Link>
      </div>
      <div className='flex gap-8'>
      <p className='text-xl'>Total</p>
      <p className='font-bold text-xl'>${totalBuy()}</p>
      </div>
      </div>   
      </div>
      }
      </div>  
  ) 
}
