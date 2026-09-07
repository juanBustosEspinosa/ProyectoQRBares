import { useState } from 'react'
import './App2.css'
import Menu from './Componentes/Menu.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<Menu idRestaurante={"2dab633a-9bd8-4d2c-b70f-ce4d7246aa77"} />} />
      
      {/* Ejemplo de rutas adicionales: */}
      {/* <Route path="/home" element={<Home />} /> */}
      {/* <Route path="*" element={<h1>Página no encontrada</h1>} /> */}
    </Routes>
  )
}
export default App
