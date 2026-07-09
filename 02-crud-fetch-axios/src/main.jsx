import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Users from './component/Users.jsx'
import Products from './component/Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Users/> */}
    <Products/>``
  </StrictMode>,
)
