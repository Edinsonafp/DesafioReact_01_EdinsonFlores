import React from 'react'

const ItemList = ({habsData}) => {
  return (
    <>
    <div className="card card-compact w-96 bg-base-100 shadow-xl" key={habsData.id}>
        <figure><img src={habsData.pictureUrl} alt={habsData.title} /></figure>
        <div className="card-body">
            <h2 className="card-title">{habsData.title}</h2>
            <p>{habsData.description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Rentar por {habsData.price} $</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemList