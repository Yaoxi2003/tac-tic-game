import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import GameStart from "./pages/GameStart"
import { useState, useRef } from "react"

function App() {
  const [count, setCount] = useState('x')
  const firstPlayer = useRef('x')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} firstPlayer={firstPlayer} />} />
        <Route path="/gamestart" element={<GameStart count={count} setCount={setCount} firstPlayer={firstPlayer} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
