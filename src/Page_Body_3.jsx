import React from 'react'
import Navbar from "./components/Navbar"
import Body_Data2 from "./pages/Page1/Body_Data2"
import Footer_Text from './components/Footer_Text';
import { FaArrowDown } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";
function Page_Body_3() {
  return (
    <>
         <Navbar button_color1="bg-transparent  rounded-full text-[#61626d]  font-medium" button_color2="bg-white shadow-lg text-black font-medium  rounded-full" button_color3="bg-transparent text-[#61626d] font-medium  rounded-full"/>
                <Body_Data2 icon = {IoArrowUp} colorText = "text-[#3f986f]" ArrowColor = "text-[#429262]" iconBg1 = "bg-[#c0fdd7]" topText1 = "8,490" topText2 = "9,250" text1 = "$59,410" text2="15,52%"  Bg1="bg-[#fdf9cd]" Bg2="bg-[#c6fedb]" color1 = "text-[#b8914d]" color2 = "text-[#4a8e66]" icon1 = {FaArrowDown} icon2 = {IoArrowUp}/>
                <Footer_Text text1="18% " text2="until your target this monts"/>
    </>
  )
}

export default Page_Body_3




