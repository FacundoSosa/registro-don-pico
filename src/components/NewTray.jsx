import React from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore"

function NewTray({weight, text}) {

    const handleSubmit = () => {
        const date = new Date()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const tray = {peso: weight, tipo: text, hora: `${hour}.${minutes}`, fecha: date}
        const db = getFirestore()
        const trayCollection = collection(db, "bandejas")
        addDoc(trayCollection, tray)
      }

  return (
    <button className='btn btn-success' onClick={handleSubmit}>ENVIAR</button>
  )
}

export default NewTray