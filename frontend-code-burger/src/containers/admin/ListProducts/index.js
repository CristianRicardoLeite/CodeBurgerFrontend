import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import apiCodeBurger from '../../../services/api'

import { Container, EditIcons } from './styles'
import stringToMonetary from '../../../utils/formatcurrency'

const ListProducts = () => {
  const [products, setProducts] = useState([])
  const [offer, setOffer] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    async function loadProducts () {
      const { data } = await apiCodeBurger.get('products')

      const newData = data.map(product => {
        return { ...product, formatedPrice: stringToMonetary(product.price) }
      })

      setProducts(newData)
    }

    loadProducts()
  }, [])

  const handleChangeOffer = (event) => {
    if (products.offer) {
      console.log(event)
    }
    return setOffer(event.target)
  }
  return (
    <Container>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align='center'> Produtos</TableCell>
            <TableCell align='center'> Preço </TableCell>
            <TableCell align='center'> Categoria </TableCell>
            <TableCell align='center'> Oferta </TableCell>
            <TableCell align='center'> Foto </TableCell>
            <TableCell> Editar Produto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="product">
                {product.name}
              </TableCell>
              <TableCell >{product.formatedPrice}</TableCell>
              <TableCell >{product.category.name}</TableCell>
              <TableCell align='center' >
                <FormControlLabel
                  control={<Switch onChange={handleChangeOffer} checked={product.offer} />}/>
                </TableCell>
              <TableCell ><img src={product.url} style={{ width: '3rem', height: '3rem' }}/></TableCell>
              <TableCell align='center'><Link to={{ pathname: '/editar-produtos', state: { product } }}><EditIcons/></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default ListProducts
