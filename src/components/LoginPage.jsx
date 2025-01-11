import { useState } from "react";
import All_Inputs from "./All_Inputs";
import Data from "./Data1";
let boolen = true;
localStorage.setItem("page" , 1)
function LoginPage(data) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem("EmailUser")
      ? JSON.parse(localStorage.getItem("EmailUser"))
      : null;
  });
  if (boolen) {
    let oldvalue = localStorage.getItem("EmailUser")
      if (oldvalue) {
        localStorage.removeItem("EmailUser")
      }
  }
  function MdEmail_Data(event) {
boolen = false;
    let oldvalue = localStorage.getItem("EmailUser")
    if (oldvalue) {
      localStorage.removeItem("EmailUser")
    }
    if (event.target.value.includes("@gmail.com")) {
      setValue(event.target.value);
      localStorage.setItem("EmailUser", JSON.stringify(event.target.value));
    }
  }
  return (
    <div className="flex flex-col items-center w-full gap-6">
      <div className="flex flex-col gap-4 w-[70%] items-center">
        <Data/>
        <div className=" text-[#cfcfcf] after:bg-[#efefef] after:w-[10%] after:mt-3 after:ml-4 after:h-[1.5px] after:absolute before:bg-[#efefef] before:w-[10%] before:mt-3 before:-ml-52 before:h-[1.5px] before:absolute">
          OR
        </div>
        <form className="flex flex-col gap-7 w-full">
           <All_Inputs type="email" onChange={MdEmail_Data} placeholder="Email adress" className="btn_1 border w-full border-[#e3e3e3] rounded-lg p-3 shadow-sm"/>
         
          <input
            onClick={data.onBtnClick}
            type="submit"
            value="Continue"
            className="w-full a2  p-3 bg-black rounded-lg text-white font-medium cursor-pointer   "
          />
        </form>
        <div className="flex flex-col items-center w-full">
          <div className="font-medium text-lg">Have a business account?</div>
          <div className="text-[#9486cc]">Sign in as a professional</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
