import React from 'react'
import { Link } from 'react-router-dom'

const Portada = () => {
  return (
    <>
        <div className="hero min-h-screen" style={{backgroundImage: `url(${require("../contents/img/individual.jpg")})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hotel Edinson</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to={"/habitaciones"} className="btn btn-primary">Ver habitaciones</Link>
            </div>
        </div>
        </div>
    </>
  )
}

export default Portada