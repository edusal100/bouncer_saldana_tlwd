import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center mb-8'>
        <div className='hidden lg:block justify-center space-x-8'>
            <Link to="/" className='bg-gradient-to-r from-yellow-200 to-yellow-200
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]'>Home</Link>
      <Link to="/category/chairs" className='bg-gradient-to-r from-yellow-200 to-yellow-200
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]'>Chairs</Link>
      <Link to="/category/sofas" className='bg-gradient-to-r from-yellow-200 to-yellow-200
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]'>Sofas</Link>
        </div>
        <div className='lg:text-center lg:-translate-x-10'>
        <Link to="/" className='text-4xl lg:text-3xl font-extrabold'>
        BOUNCER
        </Link>
        <p>We craft furnitures with love</p>
        </div>
        <div className='flex justify-center space-x-10 items-center'>
            <img className='h-4' src={require('../images/search.png')} alt="search" />
            <img className='h-4' src={require('../images/heart.png')} alt="heart" />
            <Link to="/cart">
            <CartWidget/>
            </Link>
        </div>
    </nav>
  )
}
