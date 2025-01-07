import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import Chart1 from "./Chart1"
import Up_Down_counter_box from "../../components/Up_Down_counter_box";
import { IoArrowUp } from "react-icons/io5";
 function Body_Data() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center w-full bg-white shadow-lg rounded-xl p-5">
        <Up_Down_counter_box Bg1="bg-[#fdf9cd]" Bg2="bg-[#c6fedb]" text1= "8,490" text2= "8,490" color1 = "text-[#b8914d]" color2 = "text-[#4a8e66]" icon1 = {FaArrowDown} icon2 = {IoArrowUp} />
      </div>
      <div className="p-5 bg-white shadow-lg rounded-xl flex flex-col justify-between">
        <div className="pt-4 flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-[#6f7074]">
                TOTAL NEW USERS
              </div>
              <div className="flex items-center gap-1">
                <div className="h-6 w-6 bg-[#c0fdd7] rounded-full flex items-center justify-center">
                  <IoArrowUp className="text-[#4a8e66]" />
                </div>
                <div className="font-medium text-[#458663]">15,52%</div>
              </div>
            </div>
            <div className="text-6xl font-bold text-black">5,9k</div>
          </div>
          <Chart1/>
        </div>
      </div>
    </div>
  );
}
export default Body_Data;
