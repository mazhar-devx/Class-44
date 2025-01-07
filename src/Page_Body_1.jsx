import React from 'react'
import Navbar from "./components/Navbar"
import Body_Data1 from "./pages/Page1/Body_Data1"
import Footer_Text from './components/Footer_Text';

function Page_Body_1() {
  return (
    <>
       <Navbar button_color1="bg-white  rounded-full text-black text-black shadow-lg font-medium" button_color2="bg-transparent text-[#61626d] font-medium  rounded-full" button_color3="bg-transparent text-[#61626d] font-medium  rounded-full"/>
                <Body_Data1/> 
                <Footer_Text text1="Increase 25%" text2="more email marketing to reach yur user acquisition target to reach your monthly target."/> 
    </>
  )
}

export default Page_Body_1
