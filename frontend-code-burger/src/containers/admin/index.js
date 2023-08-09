import React from 'react'
import Orders from './Orders'

import { useLocation } from 'react-router-dom'

import { Container } from './styles'
import AdminMenu from './AdminMenu'
import ListProducts from './ListProducts'
import AddNewProduct from './AddNewProduct'
import UpdateProduct from './UpdateProduct'
import AddNewCategory from './AddNewCategory'
import ListCategories from './ListCategories'

export const Admin = () => {
  const location = useLocation()
  return (
    <Container>
        <AdminMenu/>
        {location.pathname === '/pedidos' && <Orders/>}
        {location.pathname === '/lista-de-produtos' && <ListProducts/>}
        {location.pathname === '/adicionar-produtos' && <AddNewProduct/>}
        {location.pathname === '/editar-produtos' && <UpdateProduct/>}
        {location.pathname === '/lista-de-categorias' && <ListCategories/>}
        {location.pathname === '/adicionar-categorias' && <AddNewCategory/>}

    </Container>
  )
}
