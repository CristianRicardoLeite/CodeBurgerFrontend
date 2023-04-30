import React, { useState, useEffect } from 'react'

import { Container, Label, Input, ButtonAdd, LabelUpload, input } from './styles'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import { ReactSelectStyle } from '../Orders/styles'
import { useForm, Controller } from 'react-hook-form'
import apiCodeBurger from '../../../services/api'

import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { ErrorMessage } from '../../../components'
import { useNavigate, useLocation } from 'react-router-dom'

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Este campo é obrigatório'),
  price: Yup.string()
    .required('Este campo é obrigatório'),
  category: Yup.object()
    .required('Este campo é obrigatório'),
  file: Yup.mixed()
    .test('required', 'Este campo é obrigatório', value => {
      return value?.length > 0
    })
    .test('fileSize', 'Carregue um Arquivo menor de 2mb', value => {
      return value[0]?.size <= 2000000
    })
    .test('type', 'Carregue apenas Arquivos PNG ou JPEG', value => {
      return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
    })
})

const UpdateProduct = () => {
  const [fileName, setFileName] = useState()
  const [categories, setCategories] = useState([])

  const navigate = useNavigate()
  const location = useLocation()

  console.log(location)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('category_id', data.category.id)

    console.log(productDataFormData)

    await toast.promise(apiCodeBurger.post('/products', productDataFormData), {
      pending: 'Aguarde...',
      success: 'Produto Adicionado 👌',
      error: 'Verifique se seus dados estão corretos 🤯'
    }
    )
    setTimeout(() => {
      navigate('/lista-de-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories () {
      const { data } = await apiCodeBurger.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type='text' {...register('name')}></Input>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
        <Label>Preço</Label>
        <Input type='number' {...register('price')}/>
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <UploadFileIcon/>
                Upload da Imagem
              </>)}
          <input type='file'
          accept='image/png, image/jpeg'
          {...register('file')}
          onChange={value => {
            setFileName(value.target.files[0]?.name)
          }}
          />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller name='category' control={control} render={({ field }) => {
            return (
              <ReactSelectStyle
              {...field}
              options={categories}
              getOptionLabel={ cat => cat.name}
              getOptionValue={cat => cat.id}
              placeholder='Escolha a Categoria'
              />
            )
          }}>
          </Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ButtonAdd>Adicionar Produto</ButtonAdd>
      </form>
    </Container>
  )
}

export default UpdateProduct
