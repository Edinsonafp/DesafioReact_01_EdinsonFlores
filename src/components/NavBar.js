import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import Menu from "./Menu"

const NavBar = () => {
    return (
        <>
            <div className="flex justify-between">
                <Link to="/">
                    <div className="w-24 rounded">
                        <img src="https://www.designevo.com/res/templates/thumb_small/blue-tree-and-orange-sun.webp" alt=""/>
                    </div>
                </Link>
                <Menu index="Index" hab="Habitaciones" info="Informacion"/>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
                
            </div>
            
        </>        
    )
}

export default NavBar