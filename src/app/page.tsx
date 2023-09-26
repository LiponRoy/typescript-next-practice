import React from 'react'
import HomeButton from './components/reusable/buttons/HomeButton';
import InputHome from './components/reusable/inputs/InputHome';
import ModalHome from './components/reusable/antdModal/ModalHome';
import SelectHome from './components/reusable/antdSelect/SelectHome';

export default function Home() {

  return (
    <div className=" h-screen w-full bg-red-400 flex justify-center items-center">

     {/* <HomeButton></HomeButton> */}
     <br></br>
     {/* <InputHome></InputHome> */}
     <ModalHome></ModalHome>
     {/* <SelectHome></SelectHome> */}
    </div>

    
  )
}
