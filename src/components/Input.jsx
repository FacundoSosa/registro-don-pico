import React, {useState} from 'react'
import NewTray from './NewTray'

function Input({text, type}) {
  const [weight, setWeight] = useState(0)

  const handleInput = (e) => {
    setWeight(e.target.value)
  }


  return (
    <span className='d-flex justify-content-evenly align-items-center my-3 w-100'>
        <p className=' fs-5 my-0'>{text}</p>
        <input className='w-25' type={type} onChange={handleInput}/>
        <NewTray weight={weight} text={text} />
    </span>
  )
}

export default Input