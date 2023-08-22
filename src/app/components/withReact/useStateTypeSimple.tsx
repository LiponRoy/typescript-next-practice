import React, { useState } from "react";

const useStateTypeSimple = () => {
  // simple example
  const [numVal, setNumVal] = useState<number | null>(null);
  const [strVal, setStrVal] = useState<string | null>(null);

  setNumVal(12);
  setStrVal("Bangladesh");

  // pass interface value
  interface IPerson {
    name: string;
    age: number;
  }
  
  // if IPerson not found then null
  const [Val, setVal] = useState<IPerson | null>(null);

  const myObj: IPerson = {
    name: "karim",
    age: 55,
  };

  setVal(myObj);


  return <div>
    {Val?.name}
  </div>;
};

export default useStateTypeSimple;
