import React from 'react'
import styled from 'styled-components'

import Select from 'react-select'

export const ProductsImg = styled.img`
width: 60px;
height: 60px;
border-radius: 0.3rem;
`
export const ReactSelectStyle = styled(Select)`
width: 15rem;

    .css-1fdsijx-ValueContainer {
        cursor: pointer;
    }

    .css-1hb7zxy-IndicatorsContainer{
        cursor: pointer;
    }
`

export const Menu = styled.div`
display: flex;
gap: 2rem;
justify-content: center;
margin: 2rem 0;
`

export const LinkMenu = styled.a`
color: #772D2C;
padding: 5px;
cursor: pointer;
font-weight: ${props => props.isActiveStatus ? 'bold' : '400'};
border-bottom: ${props => props.isActiveStatus ? '2px solid' : 'none'};
`
