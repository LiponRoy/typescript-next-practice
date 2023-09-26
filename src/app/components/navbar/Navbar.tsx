"use client"
import { useState } from 'react';
import Logo from './Logo'
import { CgProfile } from 'react-icons/cg';
const Navbar = () => {
    const[openProfile,setOpenProfile]=useState(false);

    const openCloseProfile=()=>setOpenProfile(!openProfile)
    console.log(openProfile)

    return (
        <div className=' h-14 bg-slate-500 text-white'>
            <div className="h-full px-10 flex justify-between items-center ">
                <Logo />
                <div onClick={()=>openCloseProfile()} className=" flex justify-center items-center gap-x-1 cursor-pointer border border-slate-300 rounded-md  p-1">
                    <CgProfile size={18}/>
                    <span>Profile</span>
                </div>

            </div>
        </div>
    )
}

export default Navbar