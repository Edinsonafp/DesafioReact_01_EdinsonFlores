import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/cartContext';

const ItemCount = ({ initial, stock, habitacion}) => {
    const [count, setCount] = useState(initial);
    
    const { addItem , isInCart} = useContext(CartContext)

    const handleSubstract = () => {
        if (count > initial) {
          setCount((counter) => counter - 1);
        }
      };
      const handleAdd = () => {
        if (count < stock) {
          setCount((counter) => counter + 1);
        }
      };
  return (
    <div>
      <div>
        <button onClick={handleSubstract}>-</button>
        <input type="number" placeholder="Cantidad de noches" class="input input-bordered w-full max-w-xs" value={count}/>
        <button onClick={handleAdd}>+</button>
        <button onClick={ () => { (isInCart(habitacion.id)) ? addItem(habitacion.id, habitacion, count, true, (count * parseInt(habitacion.price))) : addItem(habitacion.id, habitacion, count, false, (count * parseInt(habitacion.price)))}} className="btn">Rentar</button>
      </div>
    </div>
  )
}

export default ItemCount