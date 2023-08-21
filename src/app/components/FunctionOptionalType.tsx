import React from 'react'

const FunctionOptionalType = () => {

    const addTwoNumbers = (a: number, b: number,c?:number) => {

        // here c is optional so it may be undefined so how can we add with c
        // thats why we need to check it here
        if( typeof c !== 'undefined'){
            return a + b + c
        }
        // if c is undefined then ...
        return a + b;
        
    }

    // without c field
    addTwoNumbers(12, 22);
    // with c field
    addTwoNumbers(12, 22,50);



  return (
    <div>
      
    </div>
  )
}

export default FunctionOptionalType
