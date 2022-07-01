import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const {idProduct} = useParams();
    const [product, setProduct] = useState([]);
  

    useEffect (() => {
      
      const arrayDetails = [
        {id: 1, brand: 'Michael Thonet', model:'Era Chair', stock: 20, price: 100, image:'https://source.unsplash.com/fr0J5-GIVyg',category:"chairs", description:"Era Chair is surprisingly petite, able to fit into all kinds of spaces, interiors, and environments. Low to the ground, open and embracing, it embodies the essence of a lounge chair, allowing for all kinds of seating positions in any cozy setting"},
        {id: 2, brand: 'Eileen Gray', model:'Transat', stock: 10, price: 80, image:'https://source.unsplash.com/m7fT6OreZfI', category:"sofas", description:"In the chicest shade of gray, Transat sofa’s linen-weave upholstery complements so many color schemes and aesthetics. Flared arms, prominent welting and flamestitch-print pillows add just enough panache to this sweet and simple sofa. Supportive seat cushions make for one comfortable landing pad."},
        {id: 3, brand: 'Marcel Breuer', model:'Cesca Chair', stock: 5, price: 170, image: 'https://source.unsplash.com/4kTbAMRAHtQ', category:"chairs", description:"Working an ultra-cool sense of style just got a whole lot easier thanks to this swivel home office desk chair. Upholstered bucket seat covered in a vintage brown faux leather merges mid-century flair with modern comfort."},
        {id: 4, brand: 'Ikea', model:'Holden White Tufted Sofa', stock: 30, price: 250, image: 'https://source.unsplash.com/1P6AnKDw6S8', category:"sofas", description:"The Caladeron sofa combines the clean lines of mid-century style with the cozy softness of your favorite blanket to create your favorite piece of furniture. The textured chenille upholstery evokes a feeling of comfort and security while the faint chevron pattern, bolster pillows and exposed black metal legs add sophistication."},
      ]
  
        const getProduct = delay =>
        new Promise(resolve => setTimeout(resolve, delay));
        
        getProduct(2000).then(()=> setProduct(arrayDetails.find(prod => prod.id === idProduct))); 
      
        }, [idProduct]);

  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

