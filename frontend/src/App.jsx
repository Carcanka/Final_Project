// import { useState } from 'react'
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Home from "./components/Home/Home"
import Inicio from "./components/Inicio/Inicio"
import MusicaContextual from "./components/MusicaContextual/MusicaContextual"
import CupidoMusical from "./components/CupidoMusical/CupidoMusical"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Inicio />
      <div className="PEPITO">-------------------------------------------------</div>
      <Register />
      <div className="PEPITO">-------------------------------------------------</div>
      <Login />
      <div className="PEPITO">-------------------------------------------------</div>
      <Home />
      <div className="PEPITO">-------------------------------------------------</div>
      <MusicaContextual />
      <div className="PEPITO">-------------------------------------------------</div>
      <CupidoMusical />
      <div className="PEPITO">-------------------------------------------------</div>
    </>
  )
}

export default App
