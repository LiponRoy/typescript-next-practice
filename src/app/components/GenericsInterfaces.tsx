import React from 'react'

const GenericsInterfaces = () => {

    interface UserData<T,X> {
        name: T;
        rollNo: X;
    }
    
    // first user send string and number values
    const user: UserData<string, number> = {
        name: "Rubel",
        rollNo: 1
    }
    
  // second user send boolean and number values
    const user2: UserData<boolean, number> = {
        name: true,
        rollNo: 1
    }


  return (
    <div>
      
    </div>
  )
}

export default GenericsInterfaces
