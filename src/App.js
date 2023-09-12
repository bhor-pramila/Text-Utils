import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

// let name = "Pramila";
function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null);
    }, 2000);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "gray";
    showAlert("Dark mode has been enabled", "success");
    document.title= 'TextUtils - Dark Mode';
    // setInterval(() =>{
    //   document.title = 'TextUtils is in Amazing mode';
    // }, 2000);
    // setInterval(() =>{
    //   document.title = 'Install TextUtils now';
    // }, 1500);

  }else{
    setMode('light');
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "success");
    document.title= 'TextUtils - Light Mode';

  }
}
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
      </Routes>
     </div>
     </Router>
</>
);
}
export default App;
