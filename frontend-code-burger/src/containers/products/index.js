import React, { useEffect, useState } from 'react'
import { Container, Header, IMG, ButtonCategories, CategoryMenu, ContainerCards, Card, InfoCards, ContainerProducts } from './styles'
import ProductsPage from '../../assets/ProductsPage.jpg'

import { useCart } from '../../hooks/CartContext'

import { Button } from '../../components'

import api from '../../services/api'
import stringToMonetary from '../../utils/formatcurrency'

export const Produts = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategories, setActiveCategories] = useState(0)

  const { putProductsInCart } = useCart()

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts () {
      const { data } = await api.get('products')

      const newData = data.map(product => {
        return { ...product, formatedPrice: stringToMonetary(product.price) }
      })

      setProducts(newData)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategories === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(product => product.category_id === activeCategories)

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategories, products])

  return (
        <Container>
            <Header>
                <div>
                    <a>home</a>
                    <a>Produtos</a>
                </div>
                <div>
                    <a>carrinho</a>
                    <a>Menu</a>
                </div>
            </Header>
            <IMG src={ProductsPage} alt='Fotos da pagina de produtos' />
            <CategoryMenu >
            { categories && categories.map(category => {
              return (
                    <ButtonCategories
                    type='button'
                    key={category.id}
                    isActiveCategory={activeCategories === category.id}
                    onClick={() => {
                      setActiveCategories(category.id)
                    }} >
                        {category.name}
                    </ButtonCategories>
              )
            }) }
            </CategoryMenu>

            <ContainerProducts>
                    {filteredProducts && filteredProducts.map(product => {
                      return (
                        <ContainerCards key={product.id}>
                          <Card >
                            <img style={{ width: '220px', height: '200px' }} src={product.url} />
                          </Card>
                            <InfoCards>
                                <p>{product.name}</p>
                                <p>{product.formatedPrice}</p>
                                <Button onClick={ () => putProductsInCart(product)} style={{ margin: '0' }}>Adicionar</Button>
                            </InfoCards>
                        </ContainerCards>
                      )
                    })}

            </ContainerProducts>
        </Container >
  )
}
