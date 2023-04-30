import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border: none;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const ImageLoginContainer = styled.img`
width: 100%;
`

export const UserContainerText = styled.div`
  display: flex;
  width: 45%;
  background-color: #E7AC7E;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Input = styled.input`
  width: 24.438rem;
  height: 2.375rem;
  margin-bottom: 0.15rem;
  background: #ffffff;
  border: ${props => props.error ? '2px solid #cc1717' : 'none'};
  border-radius: 0.5rem;
  padding: 0.5rem;
  outline: none;
`

export const LoginText = styled.h2`
  margin-top: 5rem;
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
  border-radius: 20rem;
  width: 25rem;
  height: 20rem;
`
