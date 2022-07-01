import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

export default function ItemListContainer() {

    const [items, setItems] = useState([]);
    const {idCategory} = useParams()
  

    useEffect (() => {

      
      const arrayItems = [
      {id: 1, brand: 'Michael Thonet', model:'Era Chair', stock: 20, price: 100, image:'https://source.unsplash.com/fr0J5-GIVyg',category:"chairs"},
      {id: 2, brand: 'Eileen Gray', model:'Transat', stock: 10, price: 80, image:'https://source.unsplash.com/m7fT6OreZfI', category:"sofas"},
      {id: 3, brand: 'Marcel Breuer', model:'Cesca Chair', stock: 5, price: 170, image: 'https://source.unsplash.com/4kTbAMRAHtQ', category:"chairs"},
      {id: 4, brand: 'Ikea', model:'Holden White Tufted Sofa', stock: 30, price: 250, image: 'https://source.unsplash.com/1P6AnKDw6S8', category:"sofas"},
    ]
  
    const awaitTimeout = delay =>
    new Promise(resolve => setTimeout(resolve, delay));
    
    if (idCategory){
        
        awaitTimeout(2000).then(()=> setItems(arrayItems.filter(prod => prod.category === idCategory))); 
       
      } else {
        awaitTimeout(2000).then(()=> setItems(arrayItems));
        console.log("test")
      }
    }, [idCategory]);
  
  
    return (
      <div>
        <ItemList items={items}/>
        </div>
    )
}
