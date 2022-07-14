import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from './ItemList';

export default function ItemListContainer() {

    const [items, setItems] = useState([]);
    const {idCategory} = useParams()
  

    useEffect (() => {

      const db = getFirestore();
    
    if (idCategory){
        
      const queryCollectionCategory = query(collection(db, 'items'), where('category', '==', idCategory) )
      getDocs(queryCollectionCategory)
      .then(resp => setItems ( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
       
      } else {
        const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setItems( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      }
    }, [idCategory]);
  
  
    return (
      <div>
        <ItemList items={items}/>
        </div>
    )
}
