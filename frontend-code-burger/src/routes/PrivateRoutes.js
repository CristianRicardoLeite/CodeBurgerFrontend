import React from 'react'

import { Navigate, Outlet, Route } from 'react-router-dom'
import { Header } from '../components'

function PrivateRoutes () {
  const user = localStorage.getItem('codeburger:userData')

  if (user === null) {
    return <Navigate to="/login"/>
  }

  if (!user.admin) {
    return <Navigate to="/"/>
  }

  return (
      <Outlet/>
  )
}

export default PrivateRoutes
