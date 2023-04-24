import React, { useEffect, useState } from 'react'
import { Container, ImgTitle, Img, ContainerCarousel } from './styles'
import { Button } from '../button'

import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import Carousel from 'react-elastic-carousel'
import stringToMonetary from '../../utils/formatcurrency'

import offersText from '../../assets/OFERTAS.png'
import { useCart } from '../../hooks/CartContext'

export const OffersCarousel = () => {
  const { putProductsInCart } = useCart()

  const navigate = useNavigate()

  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers () {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: stringToMonetary(product.price) }
        })

      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const handleClick = () => {

  }

  const breakPoints = [
    { width: 1, itensToShow: 1 },
    { width: 400, itensToShow: 2 },
    { width: 600, itensToShow: 3 },
    { width: 900, itensToShow: 4 },
    { width: 1300, itensToShow: 5 }
  ]
  return (
    <Container>
      <ImgTitle src={offersText} />
      <Carousel itemsToShow={5} breakPoints={breakPoints} style={{ width: '90%', margin: '0.5rem auto' }}>
        {
          offers.map(offer => <ContainerCarousel key={offer.id}>
            <Img src={offer.url} alt='Foto do Produto em Oferta' />
            <p>{offer.name}</p>
            <p>{offer.formatedPrice}</p>
            <Button onClick={() => {
              putProductsInCart(offer)
              navigate('/carrinho')
            }}>Peça Já</Button>
            </ContainerCarousel>)
        }
      </Carousel>
    </Container>

  )
}
