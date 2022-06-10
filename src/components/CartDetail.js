import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/cartContext'

const CartDetail = () => {

  const { cart , removeItem, clear } = useContext(CartContext)
  const total = cart.reduce((count, currentValue) => count = count + currentValue.total,0);
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')
  const navigate = useNavigate();
  const date = new Date();  
  
   

  /*const saveCart = async (orden) => {
    const db = getFirestore()
    const { id } = await addDoc(collection(db, 'Ordenes'), orden)
    console.log(id);
  }*/

  const saveCartHandler = async () => {    
    const user = {
      nombre: nombre,
      email: email,
      celular: celular
    } 
    const orden = {
      user: user,
      habitaciones: cart,
      fecha : date.toISOString().substring(0,10),
      total: total
    }
    const db = getFirestore()
    const { id } = await addDoc(collection(db, 'Ordenes'), orden)
    console.log(id);
    clear()
    navigate(`/ordenFinalizada/${id}`);
  }

  return (
    <div>
      
      {cart.length < 1
      ?<div className="card w-96 bg-base-100 shadow-xl content-center">
        <div className="card-body">
          <h2 className="card-title">El carrito esta vacio</h2>
          <p>Por favor vuelve a las habitaciones y selecciona la que mas te guste</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" to={"/habitaciones"}>Ver Habitaciones!</Link>
          </div>
        </div>
      </div>
      :<div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo Habitacion</th>
                <th>Cantidad Habitaciones</th>
                <th>Precio</th>
                <th>Total por cantidad habitacion</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(cart =>              
                  <tr key={cart.habId}>
                    <th>{cart.hab.id}</th>
                    <td>{cart.hab.title}</td>
                    <td>{cart.cantHab}</td>
                    <td>{cart.hab.price}</td>
                    <td>{cart.hab.price * cart.cantHab}</td>
                    <td><button className="btn btn-error" onClick={ () => { removeItem(cart.habId); }}>Eliminar</button></td>
                  </tr>
                )}  
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>                    
                  <th>Total</th>
                  <th>{total}</th>
                  <td><button className="btn btn-error" onClick={ () => { clear()}}>Eliminar Todo</button></td>
                </tr>              
            </tbody>
          </table>
          <>
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                      <div className="form-control">
                      <label className="label">
                          <span className="label-text">Nombre</span>
                      </label>
                      <input type="text" placeholder="Nombre" className="input input-bordered" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                      </div>
                      <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                      </div>
                      <div className="form-control">
                      <label className="label">
                          <span className="label-text">Celular</span>
                      </label>
                      <input type="text" placeholder="Indica tu numero celular" className="input input-bordered" value={celular} onChange={(e) => setCelular(e.target.value)} required/>
                      </div>            
                      <div className="form-control mt-6">
                      { (nombre == "" || email == "" || celular == "")? <></> 
                      : <button className="btn btn-primary" onClick={() => { saveCartHandler()}}>Reservar</button>} 
                      </div>
                  </div>
                  </div>
              </div>
            </div>
          </>
        </div>    
      }
          
    </div>
  )
}

export default CartDetail