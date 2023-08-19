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



    return (
        <div>TypeInterface</div>
    )
}

export default TypeInterface