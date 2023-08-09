import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  justify-content: center;
  align-content: center;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
`

export const IMG = styled.img`
    width: 100%;
`

export const ButtonCategories = styled.button`
    font-style: normal;
    font-weight: ${props => (props.isActiveCategory ? '600' : '400')}; 
    font-size: 1.4rem;
    line-height: 20px;
    color: ${props => (props.isActiveCategory ? '#772D2C' : '#9a9a9d')};
    border-bottom:${props => (props.isActiveCategory ? '2px solid #772D2C' : 'none')};
    filter: ${props => (props.isActiveCategory ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))' : 'none')};
    margin: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    background: none;

    :hover{
      opacity: 0.8;
    }

    :active{
      
      color:#772D2C;
    }
  `

export const CategoryMenu = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const ContainerProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100vw;
    box-sizing: border-box;
    padding: 8rem;
    grid-template-columns: repeat(3, 1fr);
    background: #E5E5E5;
`

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    width: 25vw;
    text-align: left;
    justify-items: center;
    margin: 1rem 1rem;
    border-radius: 1rem;
    padding: 1rem;
    background-color:#FFFFFF;
    
`
export const Card = styled.div`
    display: flex;
    border-radius: 1rem;
    img{
      border-radius: 1rem;
    }

`
export const InfoCards = styled.div`
    display: flex;
    flex-direction: column;
    
    margin: 0.5rem auto;
    padding: 0.5rem;
    justify-content: space-between;

`
