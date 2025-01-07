import React from 'react'
import Navbar from "./components/Navbar"
import Body_Data2 from "./pages/Page1/Body_Data2"
import Footer_Text from './components/Footer_Text';

function Page_Body_3() {
  return (
    <>
         <Navbar button_color1="bg-transparent  rounded-full text-[#61626d]  font-medium" button_color2="bg-white shadow-lg text-black font-medium  rounded-full" button_color3="bg-transparent text-[#61626d] font-medium  rounded-full"/>
                <Body_Data2/>
                <Footer_Text text1="18% " text2="until your target this monts"/>
    </>
  )
}

export default Page_Body_3