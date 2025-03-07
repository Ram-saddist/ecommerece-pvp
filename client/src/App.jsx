import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home/Home'
import Register from './Register/Register'
import Login from './Login/Login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
