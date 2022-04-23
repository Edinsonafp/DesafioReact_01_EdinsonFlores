import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <div class="avatar flex justify-between">
                <div class="w-24 rounded">
                    <img src="https://www.designevo.com/res/templates/thumb_small/blue-tree-and-orange-sun.webp" />
                </div>
                <CartWidget/>
            </div>
            
        </>        
    )
}

export default NavBar