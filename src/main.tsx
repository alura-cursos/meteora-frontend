import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router'
import { GlobalStyles } from './components/GlobalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <Router />
  </StrictMode>,
)
