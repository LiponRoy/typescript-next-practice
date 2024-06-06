import React from "react";

const GenericsFunctions = () => {
  // here peramiter and return type is generics

  const muFunc = <T,>(value: T): T => {
    return value;
  };

  interface IObj{
    name:string,
    age:number
}

const myObj:IObj={
    name:"Srila Jaman",
    age:29
}

  const numArray = muFunc<number>(50);
  const numArray2 = muFunc<string>("Bangladesh");
  // passing object with type
  const withObj = muFunc<IObj>(myObj);

  // with two paramiter

  const printData = <X, Y>(data1: X, data2: Y) => {
    console.log("Output is: ", data1, data2);
  };

  printData("Hello", "World");
  printData(123, "Hi");

  // passing type alias to generics functions

  type Language = {
    name: string;
    age: number;
  };

  function identity<T>(value: T): T {
    return value;
  }

  const mylanguae = { name: "TypeScript", age: 12 };

  identity<Language>(mylanguae);

  return <div></div>;
};

export default GenericsFunctions;
