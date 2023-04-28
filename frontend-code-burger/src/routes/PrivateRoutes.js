import React from 'react'

import PropTypes from 'prop-types'

import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../components'

function PrivateRoutes (isAdmin) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login"/>
  }

  if (!JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  isAdmin: PropTypes.bool
}
