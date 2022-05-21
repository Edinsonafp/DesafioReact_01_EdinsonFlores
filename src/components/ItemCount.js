import React, { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

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
      <div className="flex items-stretch">
        <button className="btn btn-square" onClick={handleSubstract}>-</button>
        {/**<input type="number" placeholder="Cantidad de noches" class="input input-bordered w-full max-w-xs" value={count}/>**/}
        <h1 className="box-border h-15 w-15 p-4 ">{count}</h1>
        <button className="btn btn-square" onClick={handleAdd}>+</button>        
      </div>
      {/**<button onClick={ () => { (isInCart(habitacion.id)) ? addItem(habitacion.id, habitacion, count, true, (count * parseInt(habitacion.price))) : addItem(habitacion.id, habitacion, count, false, (count * parseInt(habitacion.price)))}} className="btn btn-success">Rentar</button>**/}
      <button onClick={ () => onAdd(count)} className="btn btn-success">Rentar</button>
    </div>
  )
}

export default ItemCount