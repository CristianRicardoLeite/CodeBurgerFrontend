import React from 'react'
import LoginPhoto from '../../assets/LogoLoginPage.jpg'
import CodeBurgerRegister from '../../assets/CodeburgerRegister.png'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { ToastContainer, toast } from 'react-toastify'

import api from '../../services/api'

import Button from '../../components/button'
import {
  Container,
  ImageRegisterContainer,
  UserContainerText,
  RegisterText,
  Label,
  SignInPhrase,
  Input,
  A,
  IMG,
  ErrorMessage
} from './styles'

const schema = Yup.object().shape({
  name: Yup.string()
    .required(),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Este campo é obrigatório'),
  password: Yup.string()
    .required('Este campo é obrigatório')
    .min(6, 'Insira no minimo 6 caracteres'),
  confirmPassword: Yup.string()
    .required('Este campo é obrigatório')
    .oneOf([Yup.ref('password')], 'As senhas não correspondem')
})

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        }, { validateStatus: () => true })

      if (status === 201 || status === 200) {
        toast.success('Cadastro realizado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado!')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema, Tente novamente')
    }
  }

  return (
    <Container>
      <ImageRegisterContainer src={CodeBurgerRegister} />
      <UserContainerText>
        <IMG src={LoginPhoto} alt="CodeBurguer logo" />
        <RegisterText>Cadastro</RegisterText>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input type='text'
            {...register('name')}
            error={errors.name?.message}
          ></Input>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label>Email</Label>
          <Input type='email'
            {...register('email')}
            error={errors.email?.message}
          ></Input>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type='password'
            {...register('password')}
            error={errors.password?.message}
          ></Input>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label>Confirmar Senha</Label>
          <Input type='password'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          ></Input>
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type='submit'>Registrar</Button>

        </form>
        <SignInPhrase>Já possui conta? <A>Entre</A></SignInPhrase>
      </UserContainerText>
    </Container>
  )
}

export default Register
