import React, { useState } from 'react'
import All_Inputs from './All_Inputs'
import img from "../assets/b.png"

function ArrowClick(){
  localStorage.setItem("page" , 1)
  window.location.reload()
}
function WelcomePage(props) {
  const [value , setValue] = useState(true)
  localStorage.setItem("page" , 3)
  function Password (event){
    setValue(false)
    localStorage.setItem("Password", event.target.value)
   }
  let a = localStorage.getItem("Password")
  if (a) {
    if (value) { 
      localStorage.removeItem("Password")
    }
  }
  return (
    <div className="flex flex-col items-center w-full gap-6">
        <div onClick={ArrowClick} className="fixed top-5 left-5 cursor-pointer">
              <img src={img} alt="" className="h-10 w-10" />
            </div>
          <div className="flex flex-col gap-4 w-[70%] items-center">
            <div className="flex flex-col text-center gap-3 w-full">
              <div className="font-bold text-xl ">Welcome back</div>
              <div className="text-[#8e909e]">Enter your password and login as <span className='text-black'>{props.Email}</span></div>
            </div>
            <div className="flex flex-col gap-7 w-full">
            <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='font-bold'>Password*</label>
          <All_Inputs type="text" onChange={Password} placeholder="Enter your password" className="border w-full border-[#e3e3e3] rounded-lg p-3 shadow-sm"/>
            </div>
            <input type="submit" onClick={props.onBtnClick} value="Log in" className="btn_1 a3 w-full p-3 bg-black rounded-lg text-white font-medium cursor-pointer " />
            </div>
            <div className="text-[#9486cc] w-full cursor-pointer">Forgot your password?</div>
          </div>
        </div>
  )
}

export default WelcomePage