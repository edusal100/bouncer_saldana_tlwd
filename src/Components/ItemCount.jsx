import React, { useState } from 'react'

export default function ItemCount({stock, initial}) {
    const [auxInitial, setAuxInitial] = useState(initial);
    const [cart, setCart] = useState(0);
    
    const handleIncrement = () => {
        if(auxInitial < stock){
        setAuxInitial(auxInitial + 1);
      };
    }
    
      const handleDecrement = () => {
        if(auxInitial >0){
        setAuxInitial(auxInitial - 1);
        }
      };
    
      const onAdd = () => {
       setCart(auxInitial);
      }

  return (
    
    <div className='flex gap-4 items-center border-2 w-16 justify-center p-2'>
        <h3 className='text-lg font-medium'>{auxInitial}</h3>
        <div className='flex flex-col gap-2'>
          <img onClick={handleIncrement} src={require('../images/TriangleUp.png')} alt="arrowUp"/>
          <img onClick={handleDecrement} src={require('../images/TriangleDown.png')} alt="arrowDown"/>
        </div>
    </div>
  )
}
