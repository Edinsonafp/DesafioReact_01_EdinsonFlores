import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { habitaciones } from '../data/habitaciones'

const HabitacionDetail = () => {

  const {habID} = useParams()
  const [habitacion, setHabitacion] = useState({})

  useEffect(() => {
    (async () => {
        const habData = await getHabitacionesDetail()
        if (habData) {
            setHabitacion(habData)
        }
      })()
  }, [habID])

  const getHabitacionesDetail = () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve( habitaciones.find( hab => hab.id == habID) )
      }, 1000);
    })
  }
  
  return (
    <>
    <div class="card card-side bg-base-100 shadow-xl">
      <figure className='object-cover h-48 w-96'><img src={habitacion.pictureUrl} alt="Movie"/></figure>
      <div class="card-body">
        <h2 ClassName="card-title">Habitacion {habitacion.title}</h2>
        <h2 ClassName="card-title">{habitacion.price} por noche</h2>
        <p>{habitacion.description}</p>
        <div class="card-actions justify-end">
          <Link to={"/habitaciones"} className="btn btn-primary">Ver otras habitaciones</Link>
        </div>
      </div>
    </div>
  </>    
  )
}

export default HabitacionDetail