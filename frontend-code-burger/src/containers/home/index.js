import React from 'react'
import { Container, IMG } from './styles'
import HomePhoto from '../../assets/HomePhoto.png'

import { CategoryCarousel, OffersCarousel, Header } from '../../components'

export const Home = () => {
  return (
        <Container>
          <Header/>
            <IMG src={HomePhoto} />
            <CategoryCarousel />
            <OffersCarousel />
        </Container >
  )
}
