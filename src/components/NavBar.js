import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import Menu from "./Menu"
import { CartContext } from '../Context/cartContext'

const NavBar = () => {

    const { cart } = useContext(CartContext)
    return (
        <>
            <div className="flex justify-between">
                <Link to="/">
                    <div className="w-24 rounded">
                        <img src="https://www.designevo.com/res/templates/thumb_small/blue-tree-and-orange-sun.webp" alt=""/>
                    </div>
                </Link>
                <Menu index="Index" hab="Habitaciones" info="Informacion"/>
                {cart.length < 1
                ?<></>
                :<CartWidget/>
                
                }
                
                
            </div>
            
        </>        
    )
}

export default NavBar