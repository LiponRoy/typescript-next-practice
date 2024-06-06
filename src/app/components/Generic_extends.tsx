import React from 'react'

const Generic_extends = () => {

  const myFunc = <T extends IObj,>(a: T):T => {
    return a;
}


type IObj={
    name:string,
    age:number
}

const myObj:IObj={
    name:"Srila Jaman",
    age:29
}


// const myObj2={
//     name:"Srila Jaman",
//     role:"Admin"
// }

myFunc<IObj>(myObj);


  return (
    <div>
      
    </div>
  )
}

export default Generic_extends
