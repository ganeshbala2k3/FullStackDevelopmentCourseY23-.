import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StudentForm from './Components/StudentForm.jsx' //IMPORT

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentForm/>
  </StrictMode>,
)
