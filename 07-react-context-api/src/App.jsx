import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Dashboard from './components/Dashboard'
import UserContext from './context/UserContext'

function App() {

  const user = {
    name: "Naveen",
    role: "Admin"
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <Dashboard />
      </UserContext.Provider>

    </>
  )
}

export default App
