import React from 'react'

const GenericType1 = () => {

    // here something field we don't know what will be the type here
    // thats whay we use generic here
    interface IStudent<T>{
        name:string,
        age:number,
        something:T
    }

    // we should ensure type here....here we used number as something field
    const SumonKhan:IStudent<string>={
        name:"sumon",
        age:12,
        something:"I dont know"
    }

    // another user
     // we should ensure type here....here we used boolean as something field
    const Mitu:IStudent<boolean>={
        name:"sumon",
        age:12,
        something:false,
    }
    




  return (
    <div>GenericType</div>
  )
}

export default GenericType1