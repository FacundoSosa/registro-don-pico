import React from 'react'
import Input from './Input'

function FormContainer() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-5'>
        <Input text="De pollo" type="number"/>      
        <Input text="Fritador" type="number"/>      
        <Input text="De carne"/>      
        <Input text="Rellenas"/>      
    </div>
  )
}

export default FormContainer