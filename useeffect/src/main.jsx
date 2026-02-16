import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NewsFeedOwn from './Components/news'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsFeedOwn/>
   </StrictMode>,
)
