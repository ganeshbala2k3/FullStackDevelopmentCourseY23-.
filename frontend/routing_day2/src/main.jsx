import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import First from './Components/first.jsx'
import Second from './Components/second.jsx'
import Third from './Components/third.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Thirdone from './Components/thirdone.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/first" element={<First/>}/>
    <Route path="/second/:id" element={<Second/>}/>


    <Route path="/third" element={<Third/>}>
      <Route index element={<Thirdone/>}/>
    </Route>




    </Routes>    
    </BrowserRouter>

  </StrictMode>,
)
