import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }/>
        <Route path='/register' element={ <><h1>Page Register</h1></> }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
