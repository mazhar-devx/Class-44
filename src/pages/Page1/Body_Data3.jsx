import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import Chart2 from "./Chart2"
import Up_Down_counter_box from "../../components/Up_Down_counter_box";
import { IoArrowUp } from "react-icons/io5";

 function Body_Data() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center w-full bg-white shadow-lg rounded-xl p-5">
        <Up_Down_counter_box Bg2="bg-[#fdf9cd]" Bg1="bg-[#c6fedb]" text1= "790" text2= "526" color2 = "text-[#b8914d]" color1 = "text-[#4a8e66]" icon2 = {FaArrowDown} icon1 = {IoArrowUp} />
      </div>
      <div className="p-5 bg-white shadow-lg rounded-xl flex flex-col justify-between">
        <div className="pt-4 flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-[#6f7074]">
               AVERAGE DAILY SALES
              </div>
              <div className="flex items-center gap-1">
                <div className="h-6 w-6 bg-[#fefbd8] rounded-full flex items-center justify-center">
                  <FaArrowDown className="text-[#c98e40]" />
                </div>
                <div className="font-medium text-[#b56f3e]">15,52%</div>
              </div>
            </div>
            <div className="text-6xl font-bold text-black">$2,950</div>
          </div>
          <Chart2/>
        </div>
      </div>
    </div>
  );
}
export default Body_Data;