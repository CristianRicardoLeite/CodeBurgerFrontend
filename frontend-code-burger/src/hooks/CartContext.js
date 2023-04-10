import React, { createContext, useContext, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProductsData, setCartProductsData] = useState([])

  const updateLocalStorage = async (products) => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductsInCart = async product => {
    const cartIndex = cartProductsData.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProductsData

      newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

      setCartProductsData(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProductsData, product]
      setCartProductsData(newCartProducts)
    }

    await updateLocalStorage(newCartProducts)
  }

  const deleteProducts = async productId => {
    const newCart = cartProductsData.filter(product => product.id !== productId)

    setCartProductsData(newCart)

    await updateLocalStorage(newCart)
  }

  const increaseProductsCart = async productId => {
    const newCart = cartProductsData.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProductsData(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProductsCart = async productId => {
    const cartIndex = cartProductsData.findIndex(pd => pd.id === productId)
    if (cartProductsData[cartIndex].quantity > 1) {
      const newCart = cartProductsData.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCartProductsData(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProductsData(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProductsInCart, cartProductsData, increaseProductsCart, decreaseProductsCart }}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
