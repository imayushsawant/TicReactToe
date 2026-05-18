import { useState } from 'react'
import {useNavigate, Outlet} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
    <h1 onClick={() => navigate('/')}>Tic-React-Toe</h1>
    <Outlet />
    </>
  )
}

export default App
