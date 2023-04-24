import React from 'react'
import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line, PageLinkExit } from './styles'

import CartPhoto from '../../assets/CartPhoto.svg'
import Person from '../../assets/Person.png'

export const Header = () => {
  return (
    <>
      <Container>
        <ContainerLeft>
          <PageLink>
            Home
          </PageLink>
          <PageLink>
            Produtos
          </PageLink>
        </ContainerLeft>
        <ContainerRight>
          <PageLink >
            <img src={CartPhoto} alt="carrinho"/>
          </PageLink>
          <Line></Line>
          <PageLink >
            <img src={Person} alt="carrinho"/>
          </PageLink>
        </ContainerRight>
        <ContainerText>
          <p></p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </Container>
      </>
  )
}
