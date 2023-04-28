import React from 'react'

import { Container, ContainerMenu, AdminLink, ContainerBottom } from './styles'

import OrdersIcon from '../../../assets/Orders.png'
import AddProducts from '../../../assets/AddProducts.png'

import LogoutIcon from '@mui/icons-material/Logout'

import { useUser } from '../../../hooks/UserContext'

const AdminMenu = () => {
  const { logout } = useUser()
  return (
    <Container>
      <ContainerMenu>
        <AdminLink href='http://localhost:3000/pedidos'>
          <img src={OrdersIcon}/>
          <p>Pedidos</p>
        </AdminLink>
        <AdminLink href='http://localhost:3000/lista-de-produtos'>
          <img src={AddProducts}/>
          <p>Produtos</p>
        </AdminLink >
        <AdminLink >
          <img src={AddProducts}/>
          <p>Adicionar Categorias</p>
        </AdminLink>
        <AdminLink href='http://localhost:3000/adicionar-produtos'>
          <img src={AddProducts}/>
          <p>Adicionar Produtos</p>
        </AdminLink>
      </ContainerMenu>
      <ContainerBottom>
        <LogoutIcon />
        <AdminLink href='http://localhost:3000/pedidos' onClick={logout}>Sair</AdminLink>
      </ContainerBottom>
    </Container>
  )
}

export default AdminMenu
