import React from 'react'
import { Link, useParams } from 'react-router-dom'

const OrdenFinalizada = () => {
  const {orden} = useParams()
  return (
    <div className="card w-96 bg-base-100 shadow-xl">      
      <div className="card-body">
          <h2 className="card-title">Su orden fue completada!</h2>
          <p>El numero de su orden es: {orden}</p>
          <div className="card-actions justify-end">
          <Link to={"/habitaciones"} className="btn btn-primary">Hacer otra reserva</Link>
        </div>
      </div>
    </div>
  )
}

export default OrdenFinalizada