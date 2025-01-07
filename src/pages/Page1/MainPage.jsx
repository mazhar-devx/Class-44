import React from "react";

import Page_Body_1 from '../../Page_Body_1'
import Page_Body_2 from '../../Page_Body_2'

function Page1(props) {
  console.log(props)
  return (
    <div className="bg-[#ebebeb]  w-full flex items-center justify-center h-screen">
    <div className="w-[35rem] rounded-2xl p-5 bg-white shadow-lg flex flex-col gap-8">
    {
    (props.id == 1) ? <Page_Body_1/> : <Page_Body_2 number={props.id}/> 
    
    } 
    </div>
  </div>
    
  );
}

export default Page1;
