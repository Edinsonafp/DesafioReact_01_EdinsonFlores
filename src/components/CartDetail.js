import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/cartContext'

const CartDetail = () => {

  const { cart , removeItem, clear } = useContext(CartContext)
  const total = cart.reduce((count, currentValue) => count = count + currentValue.total,0);
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
                <>               
                  <tr key={cart.habId}>
                    <th>{cart.hab.id}</th>
                    <td>{cart.hab.title}</td>
                    <td>{cart.cantHab}</td>
                    <td>{cart.hab.price}</td>
                    <td>{cart.hab.price * cart.cantHab}</td>
                    <td><button className="btn btn-error" onClick={ () => { removeItem(cart.habId); }}>Eliminar</button></td>
                  </tr>
                </> 
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
        </div>    
      }
          
    </div>
  )
}

export default CartDetail