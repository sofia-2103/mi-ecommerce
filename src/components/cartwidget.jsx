
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Icono de carrito

const CartWidget = () => {
  return (
    <div style={{ marginLeft: '10px' }}>
      <FaShoppingCart size={24} />
    </div>
  );
};

export default CartWidget;
