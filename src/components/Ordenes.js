import { collection, deleteDoc, doc, getDocs, getFirestore, writeBatch } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const Ordenes = () => {

  const [ordenes, setOrdenes] = useState([])
  const getOrdenes = () => {
    const db = getFirestore()
    const ordenesCollection = collection(db, 'Ordenes')
    getDocs( ordenesCollection ).then( snapshot =>{
        const ordenesData = snapshot.docs.map( orden => ({'id': orden.id, ...orden.data()}) )
        setOrdenes(ordenesData)
    })
  }

  useEffect(() => {
    getOrdenes()
  }, [])
  
  const deleteOrder = async (id) => { 
    const db = getFirestore()
    await deleteDoc(doc(db, "Ordenes", id));
    getOrdenes()
  }

  const batchDeleteAllHandler = () => {
    const db = getFirestore()
    const batch = writeBatch(db)
    ordenes.map( ord => batch.delete(doc(db, 'Ordenes', ord.id)))
    batch.commit()
    setOrdenes([])
  }
  return (
    <>
      <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Numero de Orden</th>
                <th>Persona</th>
                <th>Cantidad Habitaciones</th>  
                <th>Fecha</th>              
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
            {ordenes.map( ord => 
              <tr key={ord.id}>
                <th>{ord.id}</th>
                <th>{ord.user.nombre}</th>
                <th>{ord.habitaciones.length}</th>
                <th>{ord.fecha}</th>
                <th>{ord.total}</th>
                <td><button className="btn btn-error" onClick={ () => { deleteOrder(ord.id); }}>Eliminar</button></td>
              </tr>              
              )}
            </tbody>
          </table>
      </div>
      <button className="btn btn-error" onClick={ () => { batchDeleteAllHandler(); }}>Eliminar Todo</button>      
    </>
  )
}

export default Ordenes