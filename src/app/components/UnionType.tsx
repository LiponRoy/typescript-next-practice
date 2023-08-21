import React from "react";

const UnionType = () => {


  // union type in variables
  let data: string | number | boolean;

  data = 577;
  data = "Bangladeshi";
  data = true;

  // union type in function parameters and return values
  const dataFunc = (val: string | number): string | number => {
    return val;
  };

  dataFunc(50);
  dataFunc("Dhaka");
//   dataFunc(true);

  return <div></div>;
};

export default UnionType;
