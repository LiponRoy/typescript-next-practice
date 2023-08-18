import React from 'react'

const TypeInterface = () => {

    // Type interface

    interface Teacher {
        name: string,
        age: number,
        address: string;
    }
    const sumon:Teacher = {
        name: "sumon khan",
        age: 32,
        address: "dhaka"
    }

    // optional Interface
    interface Teacher {
        name: string,
        age: number,
        address: string;
    }
    const Miraz:Teacher = {
        name: "sumon khan",
        age: 32,
        address: "dhaka"
    }

    return (
        <div>TypeInterface</div>
    )
}

export default TypeInterface