import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  border: none;
  display: flex;
`

export const ImageLoginContainer = styled.div`
  width: 80%;
  background-image: url('../../assets/Loginphotoright.png') no-repeat;
`

export const UserContainerText = styled.div`
  display: flex;
  margin-right: 6rem;
  background-color: black;
  flex-direction: column;
  padding: 3rem;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Button = styled.button`
  width: 11.375rem;
  height: 2.25rem;
  background: rgb(209, 26, 15);
  border-radius: 1.25rem;
  cursor: pointer;
  border: none;
  font-style: bold;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 1rem auto;
`

export const Input = styled.input`
  width: 24.438rem;
  height: 2.375rem;
  margin-bottom: 0.15rem;
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 0.5rem;
  outline: none;
`

export const LoginText = styled.h2`
  margin-top: 7rem;
  margin-bottom: 0.5rem;
  font-style: bold;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.75rem;
  text-align: center;
  color: #ffffff;
`

export const Label = styled.label`
  margin-bottom: 0.25rem;
  margin-top: 2rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 0.875rem;
  color: #ffffff;
`

export const SignUpPhrase = styled.p`
  margin-top: 1.8rem;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #ffffff;
`

export const A = styled.a`
  cursor: pointer;
  text-decoration: underline;
`
export const IMG = styled.img`
  margin-top: 4rem;
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
  padding-left: 1rem;
  color: #cc1717;
`
