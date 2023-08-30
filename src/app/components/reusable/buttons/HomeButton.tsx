"use client"
import React from 'react'
import CustomButton from './CustomButton'

const HomeButton = () => {

  const AfterClicked=()=>{
    console.log("You clicked me ...");
  }

  return (
    <div>

    <CustomButton title='ClickMe' handleClick={AfterClicked}/>
    <br></br>
    {/* // with reuseable css */}
    <CustomButton containerStyles="bg-green-500 text-white rounded-md p-2 my-2" title='Please click'  handleClick={AfterClicked}/>
    <br></br>
    <CustomButton isDisabled={true} containerStyles="border text-white rounded-md p-2 my-2" title='Please click'  handleClick={AfterClicked}/>


    </div>
  )
}

export default HomeButton