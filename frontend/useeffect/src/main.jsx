import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NewsDataFeed from './Components/NewsFeed'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsDataFeed/>
   </StrictMode>,
)
