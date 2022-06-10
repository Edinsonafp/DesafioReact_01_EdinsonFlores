import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({habsData}) => {
  const img = habsData.pictureUrl.replace('"', '');
  const path = require(`../contents/img/${img}`);
  return (
    <>
    <div className="card card-compact w-96 bg-base-100 shadow-xl" key={habsData.id}>
        <figure><img src={path} alt={habsData.title} /></figure>
        <div className="card-body">
            <h2 className="card-title">{habsData.title}</h2>
            <p>{habsData.description}</p>
            <div className="card-actions justify-end">            
            <Link to={`/habitaciones/${habsData.id}`} className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Item