import React from 'react'
import Navbar from "./components/Navbar"
import Body_Data3 from "./pages/Page1/Body_Data2"
import Footer_Text from './components/Footer_Text';

function Page_Body_4() {
  return (
    <>
         <Navbar button_color1="bg-transparent  rounded-full text-[#61626d]  font-medium" button_color2="bg-transparent  rounded-full text-[#61626d]  font-medium" button_color3="bg-white shadow-lg text-black font-medium  rounded-full"/>
                <Body_Data3/>
                <Footer_Text text1="5% " text2="until your daily purchase target "/>
    </>
  )
}

export default Page_Body_4