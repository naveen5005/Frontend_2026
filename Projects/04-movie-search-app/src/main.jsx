import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails.jsx'
import Favourites from './pages/Favourites.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/favourites' element={<Favourites/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
