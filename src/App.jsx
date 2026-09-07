import { useState } from 'react'
import './App2.css'
import Menu from './Componentes/Menu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
    </>
  )
}

export default App
