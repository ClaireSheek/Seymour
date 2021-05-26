import React, {useState} from 'react'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState()

  console.log("App.js Status: ", loggedIn, "User: ", username)

  const updateStatus = (x) => {
    setLoggedIn(x)
  }

  return (
      <BrowserRouter>
        <NavBar setUsername={setUsername} updateStatus={updateStatus} username={username} loggedIn={loggedIn}/>
        <Router username={username} loggedIn={loggedIn}/>
      </BrowserRouter>
  );
}

export default App;
