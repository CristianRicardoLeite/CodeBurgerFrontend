import React from 'react'
import LoginPhoto from '../../assets/LogoLoginPage.jpg'
import CodeBurgerLogo from '../../assets/Codeburgerlogin.png'

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'

import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../services/api'

import { Button } from '../../components'
import { Container, ImageLoginContainer, UserContainerText, LoginText, Label, SignUpPhrase, Input, A, IMG, ErrorMessage } from './styles'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Este campo é obrigatório'),
  password: Yup.string()
    .required('Este campo é obrigatório')
    .min(6, 'Insira no minimo 6 caracteres')
})

export const Login = () => {
  const { putUserData } = useUser()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Aguarde...',
        success: 'Bora que eu to com fome 👌',
        error: 'Verifique se seus dados estão corretos 🤯'
      }

    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos')
      } else {
        navigate('/')
      }
    }, 1000)
  }

  return (
    <Container>
      <ImageLoginContainer src={CodeBurgerLogo} />
      <UserContainerText>
        <IMG src={LoginPhoto} alt="CodeBurguer logo" />
        <LoginText>Login</LoginText>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type='email'
            {...register('email')}
            error={errors.email?.message}
          ></Input>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type='password'
            {...register('password')}
            error={errors.password?.message}
          ></Input>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type='submit'>Entrar</Button>
        </form>
        <SignUpPhrase>Não possui conta? <Link style={{ color: 'white' }} to='/cadastro'>Cadastre-se</Link></SignUpPhrase>
      </UserContainerText>
    </Container>
  )
}
