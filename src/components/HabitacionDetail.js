import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../Context/cartContext'
import ItemCount from './ItemCount'
import { doc, getDoc, getFirestore } from "firebase/firestore";

const HabitacionDetail = () => {

  const {habID} = useParams()
  const [habitacion, setHabitacion] = useState({})
  const { addItem , isInCart} = useContext(CartContext)

  function onAdd(count){
    (isInCart(habitacion.id)) 
    ? addItem(habitacion.id, habitacion, count, true, (count * parseInt(habitacion.price))) 
    : addItem(habitacion.id, habitacion, count, false, (count * parseInt(habitacion.price)))
  }

  useEffect(() => {
    getHabitacionesDetail()
  }, [habID])

  const getHabitacionesDetail = () => {
    const db = getFirestore()
    const habitacionDoc = doc(db, 'habitaciones', habID)
    getDoc( habitacionDoc ).then( hab => {
      if (hab.exists()) {
        setHabitacion( {'id': hab.id, ...hab.data()} )
      }
    })
  }
  const img = "suit.jpg";
  const path = require(`../contents/img/${img}`); 
  
  return (
    <>
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className='object-cover h-48 w-96'><img src={path} alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">Habitacion {habitacion.title}</h2>
        <h2 className="card-title">{habitacion.price} por noche</h2>
        <p>{habitacion.description}</p>
        <h2 className="card-title">Cantidad de habitaciones disponibles: {habitacion.cantidad}</h2>
        { isInCart(habitacion.id)
          ?<Link className="btn btn-success" to={"/cart"}>Terminar Compra</Link>
          :<ItemCount initial={1} stock={habitacion.cantidad} onAdd ={onAdd}/>
        }
        <div className="card-actions justify-end">
          <Link to={"/habitaciones"} className="btn btn-primary">Ver otras habitaciones</Link>
        </div>
      </div>
    </div>
  </>    
  )
}

export default HabitacionDetail