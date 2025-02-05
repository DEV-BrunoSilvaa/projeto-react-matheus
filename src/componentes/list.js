import React from 'react'
import Item from './item'


 function List  ()  {
  return (
    <>
    <h1>Minha Lista</h1>
    <ul>
        <li>Item1</li>
        <li>Item 2</li>
        <Item marca="FERRARI" /> 
        <Item marca="Fiat" />
        <Item marca="Ford" />

    </ul>
    </>
)
}

export default List