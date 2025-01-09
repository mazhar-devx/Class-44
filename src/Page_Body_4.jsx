import React from 'react'
import Navbar from "./components/Navbar"
import Body_Data3 from "./pages/Page1/Body_Data2"
import Footer_Text from './components/Footer_Text';
import { FaArrowDown } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";
function Page_Body_4() {
  return (
    <>
         <Navbar button_color1="bg-transparent  rounded-full text-[#61626d]  font-medium" button_color2="bg-transparent  rounded-full text-[#61626d]  font-medium" button_color3="bg-white shadow-lg text-black font-medium  rounded-full"/>
                <Body_Data3 icon = {FaArrowDown} colorText = "text-[#b06d34]" ArrowColor = "text-[#e7a63c]" iconBg1 = "bg-[#fbeec6]" topText1 = "790" topText2 = "590" text1 = "$2,950" text2="0,52%"  Bg2="bg-[#fdf9cd]" Bg1="bg-[#c6fedb]" color2 = "text-[#b8914d]" color1 = "text-[#4a8e66]" icon2 = {FaArrowDown} icon1 = {IoArrowUp}/>
                <Footer_Text text1="5% " text2="until your daily purchase target "/>
    </>
  )
}

export default Page_Body_4