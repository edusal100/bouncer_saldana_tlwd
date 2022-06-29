import React from 'react'

export default function ItemCount(stock, initial) {
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
    
    <div>
        <h3>{auxInitial}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={onAdd}></button>
    </div>
  )
}
