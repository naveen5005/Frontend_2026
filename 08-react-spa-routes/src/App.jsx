import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import Home from './components/Home'
import Spinner from './components/Spinner'

function App() {
  const [count, setCount] = useState(0)

  const Home = lazy(() => import('./components/Home'));
  const Contact = lazy(() => import('./components/Contact'));
  const Dashboard = lazy(() => import('./components/Dashboard'));
  const Users = lazy(() => import('./components/Users'));
  const UserDetails = lazy(() => import('./components/UserDetails'));
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Suspense fallback={<Spinner/>}>
            <Home />
          </Suspense>} />
          <Route path='/about' element={<Suspense fallback={<Spinner/>}>
            <About />
          </Suspense>} />
          <Route path='/contact' element={<Suspense fallback={<Spinner/>}>
            <Contact />
          </Suspense>} />
          <Route path='/dashboard' element={<Suspense fallback={<Spinner/>}>
            <Dashboard />
          </Suspense>}>
            <Route path='users' element={<Suspense fallback={<Spinner/>}>
              <Users />
            </Suspense>} />
            <Route path='users/:id' element={<Suspense fallback={<Spinner/>}>
              <UserDetails />
            </Suspense>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
