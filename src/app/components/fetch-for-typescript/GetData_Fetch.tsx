"use client";
import React, { useEffect, useState } from "react";


interface IUser{
    id:number
    name:string
    username:string
    email:string
}

const GetData_Fetch = () => {

 const[users,setUsers]=useState<IUser[]>([])

 const fetchData= async()=>{

    await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((e:IUser[]) => setUsers(e as IUser[]))

 }

  useEffect(() => {

    fetchData();


  }, []);

  return <div className="m-20">
    {users.map((user,i)=>(
        <div key={i} >
            <div className=" flex flex-col justify-center items-start gap-1 border-4 bg-red-200">
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.email}</span>
            </div>

        </div>
    ))}
  </div>;
};

export default GetData_Fetch;
