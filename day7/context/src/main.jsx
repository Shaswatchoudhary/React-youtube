import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Counter } from './context/counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter>
    <App />
    </Counter>
  </StrictMode>,
)
