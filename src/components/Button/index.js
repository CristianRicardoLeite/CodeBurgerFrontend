import React from 'react'
import PropTypes from 'prop-types'
import { ContainerButton } from './styles'

export const Button = ({ children, ...rest }) => {
  return (
    <ContainerButton {...rest} >{ children } </ContainerButton>
  )
}

Button.propTypes = {
  children: PropTypes.string
}
