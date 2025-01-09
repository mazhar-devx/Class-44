import React from "react";
import Chart1 from "./Chart1"
import Up_Down_counter_box from "../../components/Up_Down_counter_box";
import { IoArrowUp } from "react-icons/io5";
 function Body_Data(props) {
  let ArrowIcon = props.icon
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center w-full bg-white shadow-lg rounded-xl p-5">
        <Up_Down_counter_box Bg1={props.Bg1} Bg2={props.Bg2} color1 = {props.color1} color2 = {props.color2} icon1 = {props.icon1} icon2 = {props.icon2} text1= {props.topText1} text2= {props.topText2}  />
      </div>
      <div className="p-5 bg-white shadow-lg rounded-xl flex flex-col justify-between">
        <div className="pt-4 flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-[#6f7074]">
                TOTAL NEW USERS
              </div>
              <div className="flex items-center gap-1">
                <div className={`h-6 w-6 ${props.iconBg1} rounded-full flex items-center justify-center`}>
                  <ArrowIcon className={props.ArrowColor} />
                </div>
                <div className={`${props.colorText} font-medium `}>{props.text2}</div>
              </div>
            </div>
            <div className="text-6xl font-bold text-black">{props.text1}</div>
          </div>
          <Chart1/>
        </div>
      </div>
    </div>
  );
}
export default Body_Data;
