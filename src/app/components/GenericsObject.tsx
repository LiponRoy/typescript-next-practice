import React from 'react'

const GenericsObject = () => {
    // Why use generics ?: 
    // Jokhon user tar nijer moto kore type dite parbe,
    // eijonno T dea rakha hoy then user jokhon type dibe tokhon se nijer moto kore type bole dite parbe,

    // Generics in object
    interface myObj<T>{
        name: string;
        age: number;
        something:T
    }

    // here user give number to myObj interface for something field
    const rubel:myObj<number> ={
        name:"Bangladesh",
        age:45,
        something:55

    }

      // here user give string to myObj interface for something field
    const rubel2:myObj<string> ={
        name:"Bangladesh",
        age:45,
        something:"Bangladesh"

    }
  return (
    <div>
      
    </div>
  )
}

export default GenericsObject
