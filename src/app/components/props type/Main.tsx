"use client"
import React from 'react'
import User from './User';
import { useState } from 'react';
import InputField from './InputField';

const Main = () => {

    const [todo, setTodo] = useState<string>("");

    console.log(todo)



  return (
    <div>   
        {/* // how to pass props with type */}
      <User name="Kamal" age={12} behaves={["good","bad"]}></User>
      {/* // how to pass useState as a props with type */}
      <InputField todo={todo} setTodo={setTodo}></InputField>

    </div>
  )
}

export default Main
