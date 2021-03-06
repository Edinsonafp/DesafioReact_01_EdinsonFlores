import React, { useState , useEffect } from 'react'
import Item from './Item'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {

  const [habs, setHabs] = useState([])

  useEffect(() => {
    
   getHabitaciones()

  }, [])  

  const getHabitaciones = () => {
    const db = getFirestore()
    const habitacionesCollection = collection(db, 'habitaciones')
    getDocs( habitacionesCollection ).then( snapshot =>{
      if (snapshot.size > 0) {    
        const habitacionesData = snapshot.docs.map( hab => ({'id': hab.id, ...hab.data()}) )
        setHabs(habitacionesData)
      }
    })
  }

  return (
    <div className="flex justify-between mt-2">
      {habs.map( habs =><Item key={habs.id} habsData = {habs}/>)}
    </div>
  )
}

export default ItemListContainer