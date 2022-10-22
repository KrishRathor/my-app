import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#222831"
      showAlert("You have entered dark mode!", 'dark')
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("You have entered light mode!", 'primary')
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-5"> 
        <Textform heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
