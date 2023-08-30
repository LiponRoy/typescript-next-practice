"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
// import './App.css'
import Input from './CustomInput'

const InputHome = () => {
  const [name, setName] = useState('')

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
         console.log(name);
  }

  return (
    <div className="page-center">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Login Form</h3>
        <Input
          type="text"
          label="Name"
          value={name}
          name="name"
          onChange={handleNameChange}
          placeholder="Please enter your name"
        />
        <Input
          type="number"
          label="Name"
          value={name}
          name="name"
          onChange={handleNameChange}
          placeholder="Please enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default InputHome
