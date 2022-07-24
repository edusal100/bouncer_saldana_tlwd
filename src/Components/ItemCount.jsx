import React, { useState } from 'react'

export default function ItemCount({stock, initial, onAdd}) {
    const [auxInitial, setAuxInitial] = useState(initial);

    
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

  return (
    
    <div>
      <div className='flex gap-4 items-center border-2 w-16 justify-center p-2'>
        <h3 className='text-lg font-medium select-none'>{auxInitial}</h3>
        <div className='flex flex-col gap-2'>
          <img className='cursor-pointer select-none' onClick={handleIncrement} src={require('../images/TriangleUp.png')} alt="arrowUp"/>
          <img className='cursor-pointer select-none' onClick={handleDecrement} src={require('../images/TriangleDown.png')} alt="arrowDown"/>
        </div>
        </div>
        <button onClick={()=>onAdd(auxInitial)} className='mt-8 h-10 px-6 font-semibold rounded-md bg-black text-white'>Add to Cart</button>
    </div>
  )
}
