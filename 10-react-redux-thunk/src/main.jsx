import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import Users from './components/Users.jsx';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Users />
    </Provider>
    {/* <App /> */}
  </StrictMode>,
)
