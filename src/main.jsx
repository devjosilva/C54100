import React from 'react'
import ReactDOM from 'react-dom/client'
import { ServiciosApp } from './ServiciosApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ServiciosApp/>
    </React.StrictMode>
  </BrowserRouter>
)
