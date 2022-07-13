import React, {useContext} from 'react'
import { CartContext } from './CartContext'


export default function CartWidget() {

  const {cartList, cartCounter} = useContext(CartContext)

  return (
    <div className='flex gap-1 items-center'>
    <img className='h-4' src={require('../images/cart.png')} alt="cart" />
    {cartList.length === 0 ?
    <span></span> :
    <span className='text-sm'>{cartCounter()}</span> }
    </div>
  )
}
