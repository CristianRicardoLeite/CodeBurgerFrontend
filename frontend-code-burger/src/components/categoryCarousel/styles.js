import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 3rem;
  background: #E5E5E5;

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
    width: 30%;
    margin: 2rem auto;
    border-radius: 5rem;
`

export const Img = styled.img`
  width: 100%;
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
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: #FFFFFF;
 }
`
