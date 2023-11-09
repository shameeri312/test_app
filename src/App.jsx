import { useState } from 'react'
import './App.css'
import About from './components/About'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'

function App() {
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('dark')
  const [alert, setAlert] = useState(null)
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  })

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }



  const changeTheme = () => {
    if (mode === 'light') {
      setText('white')
      setMode('dark')
      document.body.style.backgroundColor = '#001025'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled!!', 'info')
      document.title = 'Dark Mode'

      setMyStyle({
        color: 'white',
        backgroundColor: '#001025',
      })
    } else {
      setText('black')
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled!!', 'success')
      document.title = 'Light Mode'

      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      })
    }
  }




  return (
    <>
      <Router>
        <Navbar title="My Site" toggleMode={changeTheme} bgColor={mode} text={text} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About myStyle={myStyle} />} />
            <Route exact path="/text" element={<Textform heading="Enter the text to analyze" showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
