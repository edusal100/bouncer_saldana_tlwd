import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc } from 'firebase/firestore'
import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'


export default function FormBuyer() {

    const [orderId, setOrderId] = useState ('')
    const[formData, setFormData] = useState({
        name:"", email:"", phone:""
    })
    const {cartList, totalBuy, vaciarCarrito} = useContext(CartContext)

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
            
        })
    }

    const createOrder = (e) => {

        e.preventDefault();
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = totalBuy()
        
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.model
            const price = cartItem.price
            const quantity = cartItem.cantidad
            const totalPrice = cartItem.price * cartItem.cantidad
            return {id, name, price, quantity, totalPrice}
        })


        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))
        .finally(() => { 
            updateStock()
            vaciarCarrito()
            setFormData({
                name:"", email:"", phone:""
            })
        })

        function updateStock() {
            const batch = writeBatch(db)

            order.items.map(el => {
                let updateDoc = doc(db, 'items', el.id)
                let currentStock = cartList.find(item => item.id === el.id).stock

                batch.update( updateDoc, {
                    stock: currentStock - el.quantity
                })
            })

            batch.commit()
        }
    }

  return (
    <div>
        {orderId ? 

        <div className='flex justify-center'>
            <h1>Thanks!</h1>
            <h3>Your order is complete.</h3>
            <p>El id de tu compra es {orderId}</p>
            <Link to="/">
            <button className='mt-8 h-10 px-6 font-semibold rounded-md bg-black text-white' >Home Page</button>
            </Link>
        </div> :

        <div>
            <form onChange={handleChange} onSubmit={createOrder}>
                <label>Name</label>
                <input type="name" name="name" value={formData.name} placeholder="" required/>
                <label>Phone</label>
                <input type="text" name="phone" value={formData.phone} placeholder="" required/>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} placeholder="" required/>
                <button className='mt-8 h-10 px-6 font-semibold rounded-md bg-black text-white' >Proceed to Payment</button>
            </form>
        </div>
        
    }
    </div>
  )
}
