import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/cartContext'

const CartWidget = () => {
    const { cart } = useContext(CartContext)
    return (
        /*
        <button className="btn gap-2 m-2">
            Cart Widget
            <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
            </svg>
        </button>
        */
        <div className="dropdown dropdown-end">
        <label tabindex="0" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">{cart.length}</span>
          </div>
        </label>
        <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{cart.length} Items</span>
            <span className="text-info">Subtotal: {cart.reduce((count, currentValue) => count = count + currentValue.total,0)}</span>
            <div className="card-actions">
              <Link to="/cart" className="btn btn-primary btn-block">Ver Detalle</Link>
            </div>
          </div>
        </div>
      </div>
    )
}
export default CartWidget