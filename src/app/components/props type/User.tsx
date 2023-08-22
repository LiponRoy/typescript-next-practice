import React from 'react'


interface IUserProps{
    name: string;
    age: number;
    behaves:string[]
}

const User = ({name,age,behaves}:IUserProps) => {
  return (
    <div>
      <span>{name}</span>
      <span>{age}</span>
      <span>{behaves[0]}</span>
    </div>
  )
}

export default User
