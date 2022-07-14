import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default function ItemDetailContainer() {

    const {idProduct} = useParams();
    const [product, setProduct] = useState([]);
  

    useEffect (() => {
      
      const db = getFirestore()
      const queryDb = doc (db, 'items', idProduct)

      getDoc(queryDb)
      .then(resp => setProduct({id: resp.id, ...resp.data()}))
        }, [idProduct]);

  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

