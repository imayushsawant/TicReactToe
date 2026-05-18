import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'

function HomePage() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  return (
    <>
    <button onClick={() => navigate('/game')}>Start Game</button>
    </>
  )
}

export default HomePage
