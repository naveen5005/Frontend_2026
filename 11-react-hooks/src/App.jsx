import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ThemeContext } from './components/UseContext/ThemeContext'
import Home from './components/UseContext/Home'

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}} >
      <Home/>
    </ThemeContext.Provider>
  )
}

export default App
