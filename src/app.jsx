// src/App.jsx
import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
