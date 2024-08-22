import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalProvider from './context/globalProvider.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <GlobalProvider>
    <App />
    </GlobalProvider>
    </Router>
  </StrictMode>,
)
