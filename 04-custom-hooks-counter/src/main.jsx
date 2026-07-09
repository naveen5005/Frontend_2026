import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickCounter from './components/ClickCounter.jsx'
import HoverCounter from './components/HoverCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ClickCounter/>
    <HoverCounter/>
  </StrictMode>,
)
