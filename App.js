// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import About from "./components/About.js";
import { useState } from "react";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";  

function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = '#36454F'
      setMode("dark");
    } else {
      document.body.style.backgroundColor = 'white'
      setMode("light");
    }
  };
  const togglemode1 = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = '	#023020'
      setMode("dark");
    } else {
      document.body.style.backgroundColor = 'white'
      setMode("light");
    }
  };
  const togglemode2 = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = '#301934'
      setMode("dark");
    } else {
      document.body.style.backgroundColor = 'white'
      setMode("light");
    }
  };

  return (
    <>
    {/* <Router> */}
    <Navbar title="Go Text" mode={mode} togglemode={togglemode} togglemode1={togglemode1} togglemode2={togglemode2}/>
    <div className="container">
    
    <Textform mode={mode} />
   <About mode={mode}/>
     
      
      {/* <Routes>
          <Route path="/about"  element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={ <Textform mode={mode} />}>
         
          </Route>
        </Routes> */}
        </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;
