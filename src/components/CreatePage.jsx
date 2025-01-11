import {useState} from "react";
import All_Inputs from "./All_Inputs";
import img from "../assets/b.png"
localStorage.setItem("page" , 2)
let boolen  = true;
function ArrowClick(){
  localStorage.setItem("page" , 1)
  window.location.reload()
}
function CreatePage(props) {
  const [value , setValue] = useState(()=>{
      return localStorage.getItem("EmailUser_With_Password") ? JSON.parse(localStorage.getItem("EmailUser_With_Password")) : {email:null , password: null}
    });
    localStorage.setItem("submit_pwd" , 2)
    if (boolen) {
      let a = localStorage.getItem("currentPassword")
     if (a) {
      localStorage.removeItem("currentPassword")
     } 
    }
    function Password(event){
     boolen = false;
      localStorage.setItem("currentPassword" , event.target.value)
      let oldEmail = JSON.parse(localStorage.getItem("EmailUser"))
        if (oldEmail) {
          setValue({
            email: oldEmail,
            password: event.target.value
          })
          localStorage.setItem("EmailUser_With_Password", JSON.stringify({email: oldEmail , password: event.target.value}))
          console.log(value) 
        }
    }
  return (
    <div className="w-full flex items-center flex-col gap-8 ">
      <div onClick={ArrowClick} className="fixed top-5 left-5 cursor-pointer">
        <img src={img} alt="" className="h-10 w-10" />
      </div>
      <div className="w-full text-center max-w-[70%]">
        <div className="font-bold text-xl ">Create account</div>
        <div className="text-[#979b9f] font-medium">
          You're almost there! Create your new account for
          <span className="text-black ">{props.Email}</span> by completing
          these details
        </div>
      </div>
      <form className="flex flex-col  2xl:max-w-[70%] gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">
            First name*
          </label>
          <All_Inputs type="text" onChange={"no"} placeholder="Enter your Name" className="border border-[#e3e3e3] rounded-lg p-3 shadow-sm"/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="LastName" className="font-bold">
            Last Name* 
          </label>
          <All_Inputs type="text" onChange={"no"} placeholder="Enter Your Name" className="border border-[#e3e3e3] rounded-lg p-3 shadow-sm"/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Password" className="font-bold">
            Password*
          </label>
          <All_Inputs type="text" onChange={Password} placeholder="Enter your Password" className="border border-[#e3e3e3] rounded-lg p-3 shadow-sm"/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phonenumber" className="font-bold">
            Mobile number*
          </label>
          <div className="flex items-center gap-3">
            <select className="border border-[#e3e3e3] rounded-lg p-3 shadow-sm ">
              <option value="">+92</option>
              <option value="">+25</option>
              <option value="">+32</option>
              <option value="">+12</option>
            </select>
          <All_Inputs type="number" onChange={"no"} placeholder="Enter your number" className="border border-[#e3e3e3] rounded-lg p-3 w-full shadow-sm"/>
          </div>
        </div>
        <div className="flex items-center gap-2">
        <All_Inputs type="checkbox" onChange={"no"} placeholder="" className="h-4 w-4 accent-[#6e4fed]"/>
          <div className="text-[#637276] font-medium">
            I agree to the
            <span className="text-[#957acb]">
              
              Privacy Policy, Terms of Use
            </span>
            and <span className="text-[#8a7fc0]">Terms of Service</span>
          </div>
        </div>
        <div className="flex items-center gap-2"> 
        <All_Inputs type="checkbox" onChange={"no"} placeholder="" className="h-4 w-4 accent-[#6e4fed]"/>
          <div className="text-[#637276] font-medium">
            I agree to receive marketing notifications with offers and news
          </div>
        </div>
        <input type="submit" onClick={props.onBtnClick} className="btn_1 a1 w-full p-3 bg-black rounded-lg text-white font-medium cursor-pointer  " />
      </form>
    </div>
  );
}

export default CreatePage;
