import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
  

    useEffect (() => {
  
      const arrayDetails =
        {id: 1, brand: 'Michael Thonet', model:'Era Chair', stock: 20, price: 100, image:'https://source.unsplash.com/fr0J5-GIVyg', description:"Era Chair is surprisingly petite, able to fit into all kinds of spaces, interiors, and environments. Low to the ground, open and embracing, it embodies the essence of a lounge chair, allowing for all kinds of seating positions in any cozy setting"}
  
        const getProduct = delay =>
        new Promise(resolve => setTimeout(resolve, delay));
        
        getProduct(2000).then(()=> setProduct(arrayDetails)); 
      
        }, []);

  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

