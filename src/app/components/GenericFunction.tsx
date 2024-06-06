import React from 'react'

const GenericFunction = () => {

    const myFunc = <T extends IObj,>(a: T):T => {
        return a;
    }


    type IObj={
        name:string,
        age:number
    }

    const myObj:IObj={
        name:"Srila Jaman",
        age:29
    }


    // const myObj2={
    //     name:"Srila Jaman",
    //     role:"Admin"
    // }

    


    myFunc<IObj>(myObj);





    return (
        <div>GenericFunction</div>
    )
}

export default GenericFunction