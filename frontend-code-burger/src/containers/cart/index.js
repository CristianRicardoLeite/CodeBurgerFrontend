import React, { useEffect, useState } from 'react'
import { Container, IMG, CartContainer, CartInfo, ContainerBody, EmptyCart, CartResume } from './styles'
import CartPhoto from '../../assets/CartPhoto.svg'

import { useCart } from '../../hooks/CartContext'

import { Button } from '../../components'

import stringToMonetary from '../../utils/formatcurrency'
import apiCodeBurger from '../../services/api'
import { toast } from 'react-toastify'

export const Cart = () => {
  const { cartProductsData, increaseProductsCart, decreaseProductsCart } = useCart()

  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  useEffect(() => {
    const sumAllItens = cartProductsData.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice((sumAllItens))
  }, [cartProductsData, deliveryTax, setFinalPrice])

  const submitOrder = async () => {
    const order = cartProductsData.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(apiCodeBurger.post('orders', { products: order }), {
      pending: 'Realizando seu pedido...',
      success: 'Pedido Realizado com Sucesso',
      error: 'falha ao tentar realizar o seu pedido, tente novamente'
    })
  }

  return (
    <Container>
      <IMG src={CartPhoto} alt='Fotos da pagina de produtos' />
      <div className='Wrapper'>
      <CartContainer>
        <CartInfo>
          <p></p>
          <p>Itens</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Total</p>
        </CartInfo>

        {cartProductsData && cartProductsData.length > 0
          ? cartProductsData.map(product => {
            return (
              <ContainerBody key={product.id}>
                <img src={product.url} />
                <p>{product.name}</p>
                <p>{stringToMonetary(product.price)}</p>
                <div className='PlusAndMinus'>
                  <button onClick={() => decreaseProductsCart(product.id)}>-</button>
                  <p>{product.quantity}</p>
                  <button onClick={() => increaseProductsCart(product.id)}>+</button>
                </div>
                <p>{stringToMonetary(product.quantity * product.price)}</p>
              </ContainerBody>
            )
          })
          : <EmptyCart>Carrinho Vazio</EmptyCart>
        }
      </CartContainer>
      <CartResume>
        <div className='container-top'>
          <t2 className='title'>Resumo do pedido</t2>
          <p className='items'>Itens</p>
          <p className='items-price'>{stringToMonetary(finalPrice)}</p>
          <p className='delivery-tax'>Taxa de Entrega</p>
          <p className='delivery-price'>{stringToMonetary(deliveryTax)}</p>
        </div>
        <div className='container-bottom'>
          <p>Total</p>
          <p>{stringToMonetary(finalPrice + deliveryTax)}</p>
        </div>
        <Button style={{ width: '95%' }} onClick={submitOrder} >Finalizar Pedido</Button>
        </CartResume>
      </div>
    </Container >
  )
}
