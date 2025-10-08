
import React from 'react';

const ItemListContainer = ({ saludo }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{saludo}</h1>
      <p>Aquí se mostrará el catálogo de productos.</p>
    </div>
  );
};

export default ItemListContainer;
