import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  border: none;
  background: #E5E5E5;
  justify-content: center;
  align-content: center;


  .Wrapper{
    display: flex;
  }
`

export const CartContainer = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 1rem;
    display: inline-block;
    padding: 2rem;
    margin: 2rem;
    
`

export const CartInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.6rem 1rem;
    padding: 1rem;
    border-bottom: 1px solid #b5b5b5;
    margin-bottom: 1rem;
    text-align: center;

    p{
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;
      color: #9A9A9D;
    }
`

export const IMG = styled.img`
   width: 100vw;
`
export const ContainerBody = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.6rem 1rem;
  padding: 0.5rem;
  align-items: center;

  img{
    border-radius: 0.5rem;
    max-width: 8rem;
  }

  p{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }

  .PlusAndMinus{
    display: flex;
    gap: 1.1rem;
    flex-direction: row;
    justify-content: center;

    p{
      margin-top: 0.45rem;
      font-size: 1.3rem;
    }

    button{
      background: transparent;
      height: 1.3rem;
      border: none;
      font-size:1.8rem;
      cursor: pointer;
    }
  }
`

export const EmptyCart = styled.p`
  text-align: center;
  padding: 8rem;
`
export const CartResume = styled.div`
    width: 45vw;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


  .container-top{
    padding: 2rem;
    display: grid;
    margin-bottom: 12rem;
    grid-template-areas:
    'title title'
    'items items-price'
    'delivery-tax delivery-price';
    grid-gap: 1.3rem 1.8rem;
  }

  .title{
    grid-area: title;
    margin: 1rem;
    font-style: bold;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 16px;
    color: #222222;
  }

  .items{
    grid-area: items;
    font-size: 1rem;
  }

  .items-price{
    grid-area: items-price;
    font-size: 1rem;
  }

  .delivery-tax{
    grid-area: delivery-tax;
    font-size: 1rem;
  }

  .delivery-price{
    grid-area: delivery-price;
    font-size: 1rem;
  }

  .container-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
`
