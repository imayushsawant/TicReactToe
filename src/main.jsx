import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/homepage.jsx'
import Game from './components/game.jsx'

const router = createBrowserRouter([
  { path: '/', 
    element: <App />, 
    children: [
      { path: '', element: <HomePage /> },
      { path: 'game', element: <Game /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
