import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SiteContextProvider from './contexts/SiteContext'

createRoot(document.getElementById('root')).render(
  <SiteContextProvider>
    <App />
  </SiteContextProvider>
)