import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import backgroundImage from './assets/background.svg'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main
      style={{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'auto',
        backgroundPosition: 'top left',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <App />
    </main>
    
  </StrictMode>,
)
