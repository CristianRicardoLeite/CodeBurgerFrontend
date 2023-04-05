import React from 'react'
import LoginPhoto from '../../assets/LogoLoginPage.jpg'
import CodeBurgerLogo from '../../assets/Codeburgerlogin.png'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../services/api'

import {
  Container,
  ImageLoginContainer,
  UserContainerText,
  LoginText,
  Label,
  Button,
  SignUpPhrase,
  Input,
  A,
  IMG,
  ErrorMessage
} from './styles'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Este campo é obrigatório'),
  password: Yup.string()
    .required('Este campo é obrigatório')
    .min(6, 'Insira no minimo 6 caracteres')
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
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
        <SignUpPhrase>Não possui conta? <A>Cadastre-se</A></SignUpPhrase>
      </UserContainerText>
    </Container>
  )
}

export default Login
