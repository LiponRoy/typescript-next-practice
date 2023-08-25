import React from 'react'

const GenericFunction = () => {

    const myFunc = <T,X>(a: T, b: X):[T,X] => {
        return [a,b];
    }

    myFunc(5,6);
    myFunc("bangla","english");





    return (
        <div>GenericFunction</div>
    )
}

export default GenericFunction