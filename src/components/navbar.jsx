
import React from 'react';
import CartWidget from './cartwidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#eee' }}>
      <div>
        <h2>Mi Tienda</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#home" style={{ margin: '0 10px' }}>Home</a>
        <a href="#productos" style={{ margin: '0 10px' }}>Productos</a>
        <a href="#contacto" style={{ margin: '0 10px' }}>Contacto</a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
