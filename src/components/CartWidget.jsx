import React from 'react';

export const CartWidget = () => {
  return (
   <div style={{ display:'flex', alignItems: 'center'}}>
    <span className="material-symbols-outlined">
        shopping_cart_checkout
    </span>
   </div>
  );
};

export default CartWidget;