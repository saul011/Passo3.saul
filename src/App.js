import React from 'react';
import './App.css';
import Contador from './components/Contador';
import AlternadorTexto from './components/AlternadorTexto';
import ListaTarefas from './components/ListaTarefas';

function App() {
  return (
    <div className="App">
      <h1>Componentes de Exemplo</h1>
      <Contador />
      <AlternadorTexto />
      <ListaTarefas />
    </div>
  );
}

export default App;
