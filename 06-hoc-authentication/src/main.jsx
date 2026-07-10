import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import withAuth from './components/withAuth.jsx'
import Dashboard from './components/Dashboard.jsx'

const ProtectedDashboard = withAuth(Dashboard);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ProtectedDashboard 
      isLoggedIn = {true}
      name=  "Naveen"
      age = {29}

    />
  </StrictMode>,
)
