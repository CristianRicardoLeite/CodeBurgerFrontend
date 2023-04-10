import React from 'react'
import { Container, Header, IMG } from './styles'
import HomePhoto from '../../assets/HomePhoto.png'

import { CategoryCarousel, OffersCarousel } from '../../components'

export const Home = () => {
  return (
        <Container>
            <Header>
                <div>
                    <a>Home</a>
                    <a>Products</a>
                </div>
                <div>
                    <a>carrinho</a>
                    <a>Menu</a>
                </div>
            </Header>
            <IMG src={HomePhoto} />
            <CategoryCarousel />
            <OffersCarousel />
        </Container >
  )
}
