import CartWidget from "./CartWidget"
import Menu from "./Menu"

const NavBar = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="w-24 rounded">
                    <img src="https://www.designevo.com/res/templates/thumb_small/blue-tree-and-orange-sun.webp" alt=""/>
                </div>
                <Menu index="Index" desplegable="Desplegable" ofertas="Ofertas"/>
                <CartWidget/>
            </div>
            
        </>        
    )
}

export default NavBar