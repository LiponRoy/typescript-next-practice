import React from 'react'

const TypeInArray = () => {

  // single way
  const arr: number[] = [12, 13, 14, 15, 16];

  const arr2: string[] = ["baker", "rubel"];

  // using tuple ( eikhane order maintain korte hoy)
  const arrTuple:[number,string,boolean] = [12,"rubel",true];

  // multiple way
  const arr3: (number | string | boolean)[] = [12, 13, 14, true, "rubel"];


  return (
    <div>TypeInArray</div>
  )
}

export default TypeInArray