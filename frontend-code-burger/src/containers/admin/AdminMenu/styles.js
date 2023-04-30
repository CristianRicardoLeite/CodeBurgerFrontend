import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #3C3C3C;
height: 100vh;
width: auto;
padding: 2rem;
font-size: 1rem;
white-space: nowrap;

`

export const ContainerMenu = styled.div`
background: #3C3C3C;
margin-top: 2rem;
padding: 3rem 0;
gap: .8rem;
color: #ffffff;
font-size: 1.2rem;
white-space: nowrap;
border-bottom: 2px solid #E9ECEF ;
border-top: 2px solid #E9ECEF ;
`

export const AdminLink = styled(Link)`
display: flex;
padding: 0.8rem;
margin: 1rem 0;
gap:.8rem;
cursor: pointer;
color: #ffffff;
text-decoration: none;
justify-content: left;
align-items: center;
`

export const ContainerBottom = styled.div`
    display: flex;
    flex-direction: row;
    color: #ffffff;
    justify-content: center;
    align-items: center;


`
