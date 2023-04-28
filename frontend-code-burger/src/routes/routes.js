import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Produts, Login, Register, Cart, Admin } from '../containers'
import PrivateRoutes from './PrivateRoutes'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route element={<PrivateRoutes />} >
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produts />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/pedidos" element={<Admin />} />
          <Route path="/lista-de-produtos" element={<Admin />} />
          <Route path="/adicionar-produtos" element={<Admin />} />
          <Route path="/adicionar-categorias" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
