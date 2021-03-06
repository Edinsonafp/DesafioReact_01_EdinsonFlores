import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
    isInCart: () => {}
})

const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const addItem =  (id, hab, cantHab, existe, total) => {
        if(existe){
            const habs = cart
            const index = habs.findIndex(hab => hab.habId == id)
            habs[index].cantHab = cantHab
            habs[index].total = total
            setCart(habs)
        }else{
            setCart( habAdded =>{
                return habAdded.concat({habId: id, hab : hab, cantHab : cantHab, total: total})
            })
        }
        
    }

    const removeItem = (id) => {
        //Se clona el cart porque si se elimina React no detecta cambios y no re renderiza el DOM
        const test = cart.slice()
        const index = test.findIndex(test => test.habId == id)
        test.splice(index, 1)
        setCart(test)
    }

    const clear = () => {
        setCart( () =>{
            return []
        })
    }

    const isInCart = (id) => {
        return (cart.filter(item => item.habId === id).length>0) 
        
    }


    const context = {
        cart,
        addItem,
        removeItem,
        clear,
        isInCart
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider