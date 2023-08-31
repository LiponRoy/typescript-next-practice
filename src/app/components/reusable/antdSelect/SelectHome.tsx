"use client"
import React from 'react'
import MySelect from './MySelect';

const SelectHome = () => {

    const handleChangeM = (value: string) => {
        console.log(value);
      };

     const options=[
        { value: 'select plz', label: 'select plz' },
        { value: 'school', label: 'School' },
        { value: 'collage', label: 'Collage' },
        { value: 'university', label: 'University' },
        { value: 'university 2', label: 'University 2' },
        { value: 'university 3', label: 'University 3' },
        // { value: 'Bisal', label: 'Bisal'},
      ]


  return (
    <div>
        {/* <button onClick={handleChange}>Click for select</button> */}
        <MySelect handleChange={handleChangeM } options={options} ></MySelect>
    </div>
  )
}

export default SelectHome