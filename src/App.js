import React from 'react';
import HeloWorld from './componentes/HeloWorld.js';
import SayMiNani from './componentes/SayMiNani.js';
import Pessoa from './componentes/Pessoa';
import Fase from './componentes/Fase.js';
import List from './componentes/list.js';
import './App.css';

function App() {

  const nome = 'maria'
  return (
    <div className='App' >
      <h1>Testando css</h1>
      <Fase />
      <Fase />
      <HeloWorld />
      <SayMiNani nome="mathues" />
      <SayMiNani nome="Joao" />
      <SayMiNani nome={nome} />
      <Pessoa
      nome="bruno" 
      idade="30" 
      profissao="progamador" 
      foto="https://www.google.com/url"/>
    <List />
    </div>
  );
}

export default App;
 