import React from 'react'
import { UserProvider } from './UserContext'
import { CartProvider } from './CartContext'

import PropTypes from 'prop-types'

const AppProvider = ({ children }) => {
  return (

    <CartProvider>
        <UserProvider>
            {children}
        </UserProvider>
    </CartProvider>
  )
}

export default AppProvider

AppProvider.propTypes = {
  children: PropTypes.node
}
