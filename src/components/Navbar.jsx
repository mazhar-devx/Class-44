import React from "react";
import { GrDocumentPerformance } from "react-icons/gr";
function Buttons1(){
  window.location.reload()
  localStorage.setItem("num", 1)
}
function Buttons2(){
  window.location.reload()
  localStorage.setItem("num", 2)
}
function Buttons3(){
  window.location.reload()
  localStorage.setItem("num", 3)
}
function Navbar(props) {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
        <GrDocumentPerformance className="text-[#d2d2d2] text-xl"/>
        <div className="text-xl text-black font-medium">Performance</div>
        </div>
        <div className="flex items-center justify-between gap-10 bg-[#f3f4f8] rounded-full w-full  p-2">
            <div onClick={Buttons1} className={`${props.button_color1} number1 click py-2 px-5 cursor-pointer`}>New Users</div>
            <div onClick={Buttons2} className={`${props.button_color2} number2 click py-2 px-5 cursor-pointer`}>Online Sales</div>
            <div onClick={Buttons3} className={`${props.button_color3} number3 click py-2 px-5 cursor-pointer`}>Daily Sales</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
