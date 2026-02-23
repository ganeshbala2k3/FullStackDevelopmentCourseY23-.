import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import App from './App.jsx'
import First from './first.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> //it observes the url
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/first" element={<First />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)