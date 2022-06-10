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
        <h1 className="box-border h-15 w-15 p-4 ">{count}</h1>
        <button className="btn btn-square" onClick={handleAdd}>+</button>        
      </div>
      <button onClick={ () => onAdd(count)} className="btn btn-success">Rentar</button>
    </div>
  )
}

export default ItemCount