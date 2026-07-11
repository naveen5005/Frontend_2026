import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsersForm from './components/UseRef/UsersForm.jsx'
import Counter from './components/UseRef/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UsersForm/> */}
    <Counter/>
  </StrictMode>,
)
