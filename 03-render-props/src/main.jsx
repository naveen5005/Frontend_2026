import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickCounter from './components/ClickCounter.jsx'
import MouseCounter from './components/MouseCounter.jsx'
import ReusableComp from './components/ReusableComp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ReusableComp render={(counter, handleIncrement, handleDecrement) => {
      return (
        <ClickCounter
          counter={counter}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      )
    }}

    />
    <ReusableComp render={(counter, handleIncrement, handleDecrement) => {
      return (
        <MouseCounter
          counter={counter}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      )
    }} />
  </StrictMode>,
)
