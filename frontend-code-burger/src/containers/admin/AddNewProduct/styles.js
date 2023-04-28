import React from 'react'
import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
padding: 3rem;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

    form{
        background: rgb(86, 86, 86);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 0.6rem;
        padding: 2rem;
        justify-content: center;
    }
`
export const Label = styled.p`
    font-size: 1rem;
    color: #ffffff;
`

export const Input = styled.input`
    width:100%;
    height:40px;
    background: #FFFFFF;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`

export const ButtonAdd = styled(Button)`
margin: 3rem auto;
width: 100%;
`
