import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 3rem;
  background: #fff;

  .rec.rec-arrow {
    background: #772D2C;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
    margin:1rem 1rem
  }

   .rec-dot_active{
    background: #772D2C;
    border:1px solid #772D2C;
    outline: none;
    box-shadow: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
  }

  .rec-dot{
    box-shadow: none;
    border:1px solid #772D2C;
  }

  .rec-dot:focus{
    background: #772D2C;
    border:1px solid #772D2C;
    outline: none;
    box-shadow: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #772D2C;
    background-color: #E5E5E5;
    color:#772D2C;
}

 
`

export const ImgTitle = styled.img`
    width: 25%;
    margin: 2rem auto;
`

export const Img = styled.img`
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
  border-radius: 10px;
`

export const ContainerCarousel = styled.div`
width: 100%;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

 p{
  justify-content:center;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 120%;
  margin: 0.3rem auto;
  color: #424242;
 }

`
export const Button = styled.a`
  width: 100%;
  height: 2.25rem;
  background: #772D2C;
  margin: 0.5rem;
  border-radius: 1.25rem;
  cursor: pointer;
  border: none;
  font-style: bold;
  text-decoration: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content:center;
  color: #F6F6F9;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))
  `
