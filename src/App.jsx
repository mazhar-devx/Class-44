import React from 'react'
import './App.css'
import MainPage from "./pages/Page1/MainPage"
function App() {
  let num = localStorage.getItem("num") ? localStorage.getItem("num"): 1;
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


