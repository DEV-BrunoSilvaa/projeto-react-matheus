import React from 'react';
import './App.css';

function App() {

  const name = 'Matheus Borges Da Silva'

  const newName = name.toUpperCase()

  function sum (a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className='App'>
      <h2>alterando JSX</h2>
      <p> ola, {newName}</p>
      <p> soma: {sum(1,2)} </p>
      <img src={url} alt='minha imagem'></img>
    </div>
  );
}

export default App;
