import React from 'react'
import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line, PageLinkExit } from './styles'

import { useNavigate } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Person from '../../assets/Person.png'

export const Header = () => {
  const { logout, userData } = useUser()
  const navigate = useNavigate()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <Container>
        <ContainerLeft>
          <PageLink onClick={() => navigate('/')}>
            Home
          </PageLink>
          <PageLink onClick={() => navigate('/produtos')}>
            Produtos
          </PageLink>
        </ContainerLeft>
        <ContainerRight>
          <PageLink onClick={() => navigate('/carrinho')} >
            <ShoppingCartIcon style={{ color: '#fffff' }} alt="carrinho"/>
          </PageLink>
          <Line></Line>
          <PageLink >
            <img src={Person} alt="carrinho"/>
          </PageLink>
          <ContainerText>
          <p>Olá, {userData.firstName}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
        </ContainerRight>
      </Container>
      </>
  )
}
