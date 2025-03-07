import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Register from './Register/Register'
import Login from './Login/Login'
import { AuthProvider } from './context/AuthContext'
import Navigation from './Navigation/Navigation'
import AddProduct from './AddProduct/AddProduct'
import Cart from './Cart/Cart'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-product" element={<AddProduct/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}
