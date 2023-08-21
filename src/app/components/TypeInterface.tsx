import React from 'react'

const TypeInterface = () => {

    // Type interface

    interface Iteacher {
        name: string,
        age: number,
        address: string;
    }
    const sumon: Iteacher = {
        name: "sumon khan",
        age: 32,
        address: "dhaka"
    }

    // optional Interface
    interface Iteacher2 {
        name: string,
        age: number,
        address?: string;
    }
    const Miraz: Iteacher2 = {
        name: "sumon khan",
        age: 32,
        address: "dhaka"
    }

    // extend Interface
    interface IDoctor {
        name: string,
        age: number,
    }

    interface IDoctor2 extends IDoctor {
        address: string,
    }

    const Imran: IDoctor2 = {
        name: "imran khan",
        age: 55,
        address: "Dhaka Bangladesh"

    }


    // with multiple Array field
    interface ITeacher {
        name: string,
        age: number,
        desc:(string | number | boolean)[]
    }

    
    const RubelKhan: ITeacher = {
        name: "imran khan",
        age: 55,
        desc: ["Dhaka",55,true,12,'bad']

    }

    // with Inner Object field
    interface ITeacher2 {
        name: string,
        age: number,
        desc:{
            address:string,
            something:boolean
        }
    }

    
    const RubelKhan2: ITeacher2 = {
        name: "imran khan",
        age: 55,
        desc:{
            address:"Dhaka",
            something:true
        }

    }
    
// use in a function

  interface Doctor{
    age:number,
    dob:number
  }
  // eikhane ensure kora je ei function er paramiter obossoi Doctor interface er moto hote hobe
  const withInterface = (value:Doctor): void => {
    console.log(value.age , value.dob)
  }

  const Ismail:Doctor ={
    age:33,
    dob:1990
  }
// so call korar somoy Doctor type er object e send korte hobe
  withInterface(Ismail);



    return (
        <div>TypeInterface</div>
    )
}

export default TypeInterface