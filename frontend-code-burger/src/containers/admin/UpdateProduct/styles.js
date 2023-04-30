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
        gap: 1.5rem;
        border-radius: 0.6rem;
        padding: 2rem;
        justify-content: center;
    }
`
export const Label = styled.p`
    font-size: 1rem;
    margin-left: 1rem;
    color: #ffffff;
`

export const Input = styled.input`
    width:100%;
    height:40px;
    padding: .5rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: .4rem auto;
`

export const ButtonAdd = styled(Button)`
margin: 3rem auto;
width: 100%;
`

export const LabelUpload = styled.label`
display: flex;
width: 100%;
padding: 0.5rem;
margin-bottom: 0.4rem;
border: 2px dashed #ffffff;
color: #ffffff;
cursor: pointer;
justify-content: center;
align-items: center;
gap: 8px;

input{
    opacity: 0;
    width: 1px;
}
`
