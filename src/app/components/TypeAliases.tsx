import React from 'react'

const TypeAliases = () => {

    // Type Aliases

    type teacher={
        name:string,
        age:number,
        address:string;
    }
    const sumon:teacher={
        name:"sumon khan",
        age:32,
        address:"dhaka"
    }

    // optional type, here address is optional type
    type doctor={
        name:string,
        age:number,
        address?:string;
    }
    const Rubel:doctor={
        name:"sumon khan",
        age:32,
        
    }








  return (
    <div>TypeAliases</div>
  )
}

export default TypeAliases