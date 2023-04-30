import React from 'react'

import { Container, ContainerMenu, AdminLink, ContainerBottom } from './styles'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

import LogoutIcon from '@mui/icons-material/Logout'

import { useUser } from '../../../hooks/UserContext'

const AdminMenu = () => {
  const { logout } = useUser()
  return (
    <Container>
      <ContainerMenu>
        <AdminLink to='/pedidos'>
          <ShoppingBagIcon style={{ color: '#fffff' }} />
          Pedidos
        </AdminLink>
        <AdminLink to='/lista-de-produtos'>
          <ShoppingCartIcon style={{ color: '#fffff' }}/>
          <p>Produtos</p>
        </AdminLink >
        <AdminLink to='/adicionar-produtos'>
          <AddShoppingCartIcon/>
          <p>Adicionar Produtos</p>
        </AdminLink>
        <AdminLink to='/adicionar-categorias'>
          <PlaylistAddCheckIcon style={{ color: '#fffff' }}/>
          <p>Categorias</p>
        </AdminLink>
        <AdminLink to='/alterar-categorias'>
          <PlaylistAddIcon style={{ color: '#fffff' }}/>
          <p>Adicionar Categoria</p>
        </AdminLink>
      </ContainerMenu>
      <ContainerBottom>
        <LogoutIcon />
        <AdminLink to='/pedidos' onClick={logout}>Sair</AdminLink>
      </ContainerBottom>
    </Container>
  )
}

export default AdminMenu
