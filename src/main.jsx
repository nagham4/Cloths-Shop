import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// Single createRoot call and render the app once. App already includes a Router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
