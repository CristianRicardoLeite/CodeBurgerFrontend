import React from 'react'

import PropTypes from 'prop-types'

import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../components'

function PrivateRoutes () {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login"/>
  }

  if (JSON.parse(user).admin === false) {
    return (
    <>
      <Navigate to="/" />
      <Header/>
      <Outlet/>
    </>
    )
  } else {
    return (
      <>
        <Outlet/>
      </>
    )
  }
}

export default PrivateRoutes
