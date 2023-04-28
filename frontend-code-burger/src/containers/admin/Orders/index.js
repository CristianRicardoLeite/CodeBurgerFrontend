/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { Menu, LinkMenu, Container } from './styles'

import apiCodeBurger from '../../../services/api'

import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'

import Row from './row'
import formatDate from '../../../utils/formatDate'
import status from './orders-status'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [activeStatus, setActiveStatues] = useState(1)
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders () {
      const { data } = await apiCodeBurger.get('orders')

      setOrders(data)
      setFilteredOrders(data)
    }

    loadOrders()
  }, [])

  function createData (order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filteredOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filteredOrders])

  useEffect(() => {
    if (activeStatus === 1) {
      setFilteredOrders(orders)
    } else {
      const statusIndex = status.findIndex(status => status.id === activeStatus)
      const newFilteredOrders = orders.filter(order => order.status === status[statusIndex].value)
      setFilteredOrders(newFilteredOrders)
    }
  }, [orders])

  function handleStatus (status) {
    if (status.id === 1) {
      setFilteredOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilteredOrders(newOrders)
    }
    setActiveStatues(status.id)
  }

  return (
    <Container>
      <Menu>
      { status && status.map(status => (
        <LinkMenu key={status.id} onClick={() => handleStatus(status)} isActiveStatus={activeStatus === status.id}>
          {status.label}
        </LinkMenu>
      ))}
    </Menu>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pedido</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Data do Pedido</TableCell>
            <TableCell>Status do Pedido</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.orderId} row={row} setOrders={setOrders} orders={orders} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default Orders
