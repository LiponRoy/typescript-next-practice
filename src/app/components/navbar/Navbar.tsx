"use client";
import { useState } from "react";
import Logo from "./Logo";
import { CgProfile } from "react-icons/cg";
import ProfileMenu from "./ProfileMenu";
import Overlay from "./Overlay";
const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const openCloseProfile = () => setOpenProfile(!openProfile);
  console.log(openProfile);

  return (
    <div className="relative h-14 bg-slate-500 text-white z-50">
      <div className=" h-full px-10 flex justify-between items-center ">
        <Logo />
        <div
          onClick={() => openCloseProfile()}
          className="  flex justify-center items-center gap-x-1 cursor-pointer border border-slate-300 rounded-md  p-1"
        >
          <CgProfile size={18} />
          <span>Profile</span>
        </div>
      </div>
      {openProfile && (
        <div className=" absolute top-12 right-10 border border-slate-300 p-2 rounded-md bg-slate-200 text-slate-700 z-50">
          <div className=" flex flex-col justify-center items-start">
            <ProfileMenu onClick={() => openCloseProfile()}>
              Deshboard
            </ProfileMenu>
            <ProfileMenu onClick={() => openCloseProfile()}> Admin</ProfileMenu>
            <ProfileMenu onClick={() => openCloseProfile()}>Logout</ProfileMenu>
          </div>
        </div>
      )}

      {openProfile && (
        <Overlay onClick={() => openCloseProfile()}/>
      )}
    </div>

  );
};

export default Navbar;
