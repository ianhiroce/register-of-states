import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from './pages/Register.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }/>
        <Route path='/register' element={ <Register /> }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
