
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout (() => {
      setAlert(null);
    },2000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#03321c';
      document.title = 'Text Changer - Dark Mode';
      // setInterval (() => {
      //   document.title = 'Hurryy!!!!!!';
      // },1500)
      // setInterval (() => {
      //   document.title = 'Premium Available';
      // },2000)
      showAlert("Dark Mode is Enabled","success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'Text Changer - Light Mode';
      showAlert("Light Mode is Enabled","success")
    }
  }

  return (
    <>
      <Navbar title="TextChanger" about="AboutTextChanger" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} header="Enter Text To Be Changed" mode={mode}/>
      </div>

    </>
  );
}

export default App;
