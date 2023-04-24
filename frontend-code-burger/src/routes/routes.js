import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Produts, Login, Register, Cart } from '../containers'
import PrivateRoutes from './PrivateRoute'
import Admin from '../containers/admin'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produts />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
