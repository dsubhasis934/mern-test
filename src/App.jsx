import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Components/Register'
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Login from './Components/Login'
import Users from './Components/users'
import Update from './Components/Update'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path='/update' element={<Update />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
