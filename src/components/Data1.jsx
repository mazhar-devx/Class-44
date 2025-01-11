import React from 'react'
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
function data() {
  return (
    <>
    <div className="flex flex-col text-center gap-3 w-full">
    <div className="font-bold text-xl ">Fresha for customers</div>
    <div className="text-[#8e909e]">
      Create an account or log in to book and manage your appointments.
    </div>
  </div>
  <div className="flex flex-col gap-3 w-full">
    <div className="w-full cursor-pointer p-3 px-3 hover:bg-[#b3b3b31c] border border-[#e8e8e8] rounded-lg flex items-center gap-20">
      <RiFacebookCircleFill className="text-[#3863f9] text-2xl" />
      <div className="font-medium">Countinue with Facebook</div>
    </div>
    <div className="w-full p-3 px-3 cursor-pointer hover:bg-[#b3b3b31c] border border-[#e8e8e8] rounded-lg flex items-center gap-20">
      <FcGoogle className="text-2xl" />
      <div className="font-medium">Continue with Google</div>
    </div>
  </div>
    </>
  )
}

export default data