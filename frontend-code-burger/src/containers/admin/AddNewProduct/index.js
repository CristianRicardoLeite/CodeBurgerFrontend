import React from 'react'

import { Button } from '../../../components'
import { Container, Label, Input, ButtonAdd } from './styles'
import { ReactSelectStyle } from '../Orders/styles'
import { useForm } from 'react-hook-form'

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm()

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type='text' {...register('name')}></Input>
        <Label>Preço</Label>
        <Input type='number' {...register('price')}/>
        <Label>Upload da Imagem</Label>
        <Input type='file' accept='image/png, image/jpeg' />
        <ReactSelectStyle/>
        <ButtonAdd>Adicionar Produto</ButtonAdd>
      </form>
    </Container>
  )
}

export default AddNewProduct
