import React from 'react'
import HomeButton from './components/reusable/buttons/HomeButton';
import InputHome from './components/reusable/inputs/InputHome';
import ModalHome from './components/reusable/antdModal/ModalHome';
import SelectHome from './components/reusable/antdSelect/SelectHome';
import GetData_Fetch from './components/fetch-for-typescript/GetData_Fetch';
import Axios_use from './components/fetch-for-typescript/Axios_use';
import Get_AdvanceWay from './components/fetch-for-typescript/Get_AdvanceWay';
import JsonDataAdvance_typescript from './components/fetch-for-typescript/JsonDataAdvance_typescript';

export default function Home() {

  return (
    <div className=" h-screen w-full  flex justify-center items-center">

     {/* <HomeButton></HomeButton> */}
     <br></br>
     {/* <InputHome></InputHome> */}
     {/* <ModalHome></ModalHome> */}
     {/* <SelectHome></SelectHome> */}
     {/* <GetData_Fetch/> */}
     {/* <Axios_use/> */}
     {/* <Get_AdvanceWay/> */}
     <JsonDataAdvance_typescript/>
    </div>

    
  )
}
