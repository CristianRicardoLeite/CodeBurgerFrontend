import React, { useEffect, useState } from 'react'
import { Container, ImgTitle, Img, ContainerCarousel, Button } from './styles'

import api from '../../services/api'

import Carousel from 'react-elastic-carousel'

import categoryText from '../../assets/CATEGORIAS.png'

export const CategoryCarousel = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itensToShow: 1 },
    { width: 400, itensToShow: 2 },
    { width: 600, itensToShow: 3 },
    { width: 900, itensToShow: 4 },
    { width: 1300, itensToShow: 5 }
  ]
  return (
        <Container>
            <ImgTitle src={categoryText} />
            <Carousel itemsToShow={5} breakPoints={breakPoints} style={{ width: '90%', margin: '0.5rem auto' }}>
            {
                categories &&
                categories.map(category => <ContainerCarousel key={category.id}>
                  <Img src={category.url} alt='Foto da categoria' />
                  <Button to='/produtos' state={{ categoryId: category.id }}>{category.name}</Button>
                  </ContainerCarousel>
                )
            }
            </Carousel>
        </Container>

  )
}
