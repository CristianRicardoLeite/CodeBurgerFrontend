import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

import { Router } from './routes/routes.js'

import AppProvider from './hooks'

const roote = ReactDOM.createRoot(document.getElementById('root'))
roote.render(

  <>
    <AppProvider>
      <Router />
    </AppProvider>
    <ToastContainer/>
    <GlobalStyles/>
  </>
)
