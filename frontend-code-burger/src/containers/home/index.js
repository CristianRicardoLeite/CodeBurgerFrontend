import React from 'react'
import { Container, Header, IMG } from './styles'
import HomePhoto from '../../assets/HomePhoto.png'

import { CategoryCarousel, OffersCarousel } from '../../components'

export const Home = () => {
  return (
        <Container>
            <IMG src={HomePhoto} />
            <CategoryCarousel />
            <OffersCarousel />
        </Container >
  )
}
