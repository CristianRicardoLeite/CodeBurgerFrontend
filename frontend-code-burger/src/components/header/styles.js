import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    height: 72px;
    background-color: #ffffff;
    box-shadow: 2px 3px 5px rgba(0 ,0 ,0 ,0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  `

export const ContainerLeft = styled.div`
    display: flex;
    gap: 30px;

`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    line-height: 19px;
`

export const Line = styled.div`
    height: 40px;
    border: 0.5px solid #bababa;
`

export const PageLinkExit = styled.a`
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #9758A6;
`

export const ContainerText = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
