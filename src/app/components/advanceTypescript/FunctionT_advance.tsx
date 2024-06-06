import React from 'react'

const FunctionT_advance = () => {

const cook=<T extends myObj>(a:T):T=>{

    return a;

}

type myObj={
    name:string,
    age:number
}

const myObj2:myObj={
    name:"Kamal",
    age:24
}

const result= cook<myObj>(myObj2);
console.log(result)



  return (
    <div>
      
    </div>
  )
}

export default FunctionT_advance
