import React from 'react'

const TypeInFunction = () => {

  // suimple paramiters type and return type
  const addTwoNumber = (a: number, b: number): number => {
    return a + b;
  }

  addTwoNumber(5, 6);

  // here void means, this function will not return anything
  const withVoid = (a: number, b: number): void => {
    console.log(a + b)
  }

  addTwoNumber(5, 6);
  withVoid(8, 9);

  // optional paremiter (we may pass optional paramiter)
    const OptionalPera = (a: number, b: number, c?: number): number => {
      return a+b;
    }
  
    OptionalPera(5, 6);




   // function type ( this type function always use this type)
   type myFunc =(a:number,b:number)=>number

  const addTwoNumberObject:myFunc = (s,d): number => {
    return s + d;
  }

  addTwoNumberObject(12,14);



  // use type alias 

  type allValue={
    age:number,
    dob:number
  }

  const addTwoNumberAlias = (myValue:allValue): number => {
    return myValue.age + myValue.dob;
  }



  const sumonR:allValue={
    age:12,
    dob:1990

  }

  // jehutu peramiter hisebe nibe all value so we have to pass that type object to pass
  addTwoNumberAlias(sumonR)



  // use Interface

  interface Doctor{
    age:number,
    dob:number
  }
  // eikhane ensure kora je ei function er paramiter obossoi Doctor interface er moto hote hobe
  const withInterface = (value:Doctor): void => {
    console.log(value.age , value.dob)
  }

  const Ismail:Doctor ={
    age:33,
    dob:1990
  }
// so call korar somoy Doctor type er object e send korte hobe
  withInterface(Ismail);





  return (
    <div>TypeInFunction</div>
  )
}

export default TypeInFunction