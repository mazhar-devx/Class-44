import { useState } from "react";
import { FaEarthEurope } from "react-icons/fa6";
import { MdOutlineSupport } from "react-icons/md";
import image_src from "./assets/a.jpg";
import CreatePage from "./components/CreatePage";
import LoginPage from "./components/LoginPage";
import WelcomePage from "./components/WelcomePage";
import Dashboard from "./components/Dashboard";
// import { CgPassword } from "react-icons/cg";
function App() {
  let [currentPage, setPage] = useState("LoginPage");

  let ButtonClick = () => {
    let value = JSON.parse(localStorage.getItem("EmailUser")) ? JSON.parse(localStorage.getItem("EmailUser")) : null;
    let value1 = localStorage.getItem("EmailUser_With_Password") ? JSON.parse(localStorage.getItem("EmailUser_With_Password")): { email: null, password: null };
    if (value1.email) {
      if (value == value1.email) {
        setPage((currentPage = "WelcomePage"));
      }
      else{
         if (value.includes("@gmail.com")) {
          setPage((currentPage = "CreatePage"));
        }
      }
    } else if (value) {
      console.log(value.includes("@gmail.com"));
      setPage((currentPage = "CreatePage"));
    }
  };
  let ButtonClick1 = () => {
    localStorage.setItem("trueFalse", true)
    let value1 = localStorage.getItem("EmailUser_With_Password")
    ? JSON.parse(localStorage.getItem("EmailUser_With_Password"))
    : { email: null, password: null };
    let Password = localStorage.getItem("currentPassword");
    if (Password && value1.password) {  
      if (value1.password === Password) {
        setPage((currentPage = "WelcomePage"));
      }
    }
  };

  let ButtonClick2 = () => {
    let value = JSON.parse(localStorage.getItem("EmailUser")) ? JSON.parse(localStorage.getItem("EmailUser")) : null;
    let value1 = localStorage.getItem("EmailUser_With_Password")
    ? JSON.parse(localStorage.getItem("EmailUser_With_Password"))
    : { email: null, password: null };
    let password = localStorage.getItem("Password");
    if (password) {  
      if (value == value1.email && value1.password == password) {
        setPage((currentPage = "Dashboard"));
      }
      else{
        alert("soory your password is still wroing you can try again")
        // setPage((currentPage = "WelcomePage"));
      }
    }
    else{
      alert("please add input data ")
    }
  };

  let page =   localStorage.getItem("page")
  console.log(page )
  let Pages = () => {
    let value = JSON.parse(localStorage.getItem("EmailUser")) ? JSON.parse(localStorage.getItem("EmailUser")) : null;
    if (currentPage == "CreatePage") {
    if (value) {
      return <CreatePage onBtnClick={ButtonClick1} Email={value} />;
    }
    } else if (currentPage == "LoginPage") {
      return <LoginPage onBtnClick={ButtonClick} />;
    } else if (currentPage == "WelcomePage") {
      if (value) {
      return <WelcomePage onBtnClick={ButtonClick2} Email = {value}/>;
      }
    }
    else if(currentPage == "Dashboard"){
    if (value) {
      return <Dashboard Email = {value}/>
    }
    }
     else {
      return <LoginPage />;
    }
  };

  return (
    <div className="flex  items-center justify-center">
      <div className="w-full h-screen  bg-white flex flex-col justify-between gap-10 md:px-40 p-20">
        <div>{Pages()}</div>
        <div className="flex w-full justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <FaEarthEurope className="text-[#7a6ac0]" />
            <div className="text-[#7c64d5] font-medium">English</div>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineSupport className="text-[#7a6ac0]" />
            <div className="text-[#7c64d5] font-medium">Support</div>
          </div>
        </div>
      </div>
      <img
        src={image_src}
        className="h-screen hidden xl:block object-cover w-[50%]"
        alt=""
      />
    </div>
  );
}

export default App;
