import React from 'react'
import LoginPhoto from '../../assets/Loginphotoright.png'
import CodeBurgerLogo from '../../assets/Codeburgerlogo.svg'

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

const Login = () => {
  return (
    <Container>
      <ImageLoginContainer src={LoginPhoto}/>
      <UserContainerText>
        <IMG src={CodeBurgerLogo}/>
        <LoginText>Login</LoginText>
        <Label>Email</Label>
        <Input placeholder='Email'></Input>
        <Label>Senha</Label>
        <Input placeholder='Senha'></Input>
        <Button type='Submit'>Entrar</Button>
        <SignUpPhrase>Não possui conta? <A>Cadastre-se</A></SignUpPhrase>
      </UserContainerText>
    </Container>
  )
}

export default Login
