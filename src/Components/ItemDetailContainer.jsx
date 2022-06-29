import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const [details, setDetails] = useState([]);
  

    useEffect (() => {
  
      const arrayDetails = [
      {id: 1, brand: 'Michael Thonet', model:'Era Chair', stock: 20, price: 100, image:'https://source.unsplash.com/fr0J5-GIVyg', description: "The Era chair is the perfect compliment to a beautiful kitchen island or bar. It is equally suited to a relaxed modern Los Angeles home as it is to a New York City apartment.  The iron footrest is an added comfort for resting your heels.  Thoughtful detailing enhances the simple design of this Lostine collection. Each thick leather seat has its own character and variations lending to the appeal of the material. The leather will vary in color and darken with age, like a great bag or a favorite pair of boots. The frame is made of a hard maple wood and sealed to protect the wood but keep the beauty of the wood's natural color. Made in the USA."},
    ]
  
    const setTimeout = delay =>
    new Promise(resolve => setTimeout(resolve, delay));
    
    setTimeout(2000).then(()=> setDetails(arrayDetails)); 
  
    }, []);

  return (
    <div>
        <ItemDetail details={details}/>
    </div>
  )
}
