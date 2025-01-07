import React from 'react'
import './App.css'
import MainPage from "./pages/Page1/MainPage"
// let buttons = document.querySelectorAll(".click");
function App() {
  let num = localStorage.getItem("num")
  console.log(num)
  if (num == 1) {
   return <MainPage id= {1}/>
  }
  else if (num == 2) {
   return <MainPage id= {2}/>
  }
  else if (num == 3) {
   return <MainPage id= {3}/>
  }
}

export default App


