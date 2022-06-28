import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex items-center'>
        <div className='hidden lg:block flex-1 justify-center space-x-8'>
            <a className='bg-gradient-to-r from-yellow-200 to-yellow-200
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]' href='#'>Woman</a>
            <a className='bg-gradient-to-r from-yellow-200 to-yellow-200
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]' href='#'>Man</a>
            <a className='bg-gradient-to-r from-yellow-200 to-yellow-200
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]' href='#'>About</a>
            <a className='bg-gradient-to-r from-yellow-200 to-yellow-200
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]' href='#'>Contact</a>
        </div>
        <div className='flex-1 text-4xl font-extrabold'>BOUNCER</div>
        <div className='flex justify-center space-x-10 items-center'>
            <img className='h-4' src={require('../images/search.png')} alt="cart" />
            <img className='h-4' src={require('../images/heart.png')} alt="cart" />
            <img className='mb-1.5' src={require('../images/cart.png')} alt="cart" />
        </div>
    </nav>
  )
}
