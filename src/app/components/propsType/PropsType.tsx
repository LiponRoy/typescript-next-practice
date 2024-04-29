import React from 'react';

// Define the type/interface for props
interface MyComponentProps {
  name: string;
  age: number;
}

// Define a functional component and specify the prop types
const PropsType = ({ name, age }:MyComponentProps) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default PropsType;
