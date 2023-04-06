import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

import Login from './containers/login'
// import Register from './containers/register'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>

    <Login />
    <ToastContainer/>
    <GlobalStyles/>

  </>
)
// <GlobalStyles />
