import React, { useState , useEffect } from 'react'
import { habitaciones as habData } from "../data/habitaciones"
import Item from './Item'

const ItemListContainer = () => {

  const [habs, setHabs] = useState([])

  useEffect(() => {
    
    const getHabs = new Promise ( (resolve, reject)=>{
      setTimeout(() => {
        resolve(habData)
      }, 0);
      
    })

    getHabs.then( (result) => {
      setHabs(result)
    }).catch((err)=>{
      console.log("hubo un error ", err)
    })

  }, [])  

  return (
    <div className="flex justify-between mt-2">
      {habs.map( habs =><Item key={habs.id} habsData = {habs}/>)}
    </div>
  )
}

export default ItemListContainer