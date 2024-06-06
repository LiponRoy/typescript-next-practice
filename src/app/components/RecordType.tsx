import React from "react";

const RecordType = () => {
  // Record actually key value pair type

  type RType = Record<string, number>;
  type RType2 = Record<string, unknown>;

  // When Reord will be key string and value number
  const myFile: RType = {
    "Mina": 100,
    "Raju": 50,
  };
  // When Reord will be key string and value unknown
  const myFile2: RType2 = {
    "Mina": 100,
    "Raju": "I am Raju",
    "Reza": true,
  };


//........................
  type NumericRecord = Record<string, number>
  const salary: NumericRecord = { annual: 56000, bonus: 1200 } // OK

  //For example, Record<'annual' | 'bonus', number> represents an object which can have only annual and bonus keys:

  type Salary = Record<'annual' | 'bonus', number>
  const salary1: Salary = { annual: 56000, bonus: 1200} // OK

  // Use as a function peramter 
  function funcRecord(salary: Record<string, number>) {
    console.log(salary)
  } 

  const rajuInfo={"Raju":100}

  funcRecord(rajuInfo)


  //...............





  return <div></div>;
};

export default RecordType;
