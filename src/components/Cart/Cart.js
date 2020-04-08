import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  //   const total = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    total = total + element.price;
  }

  let shipping = 0;
  if (total >= 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 5.66;
  } else if (total > 0) {
    shipping = 15;
  }

  const tax = total / 10;
  return (
    <div>
      <h4>Order Summary</h4>
      <h5>Product Price: $ {total.toFixed(2)}</h5>
      <h6>Items Ordered : {cart.length} </h6>
      <p>Shipping cost :$ {shipping}</p>
      <small>Tax + Vat : $ {tax.toFixed(2)}</small>
      <p>Total Price: $ {(total + shipping+tax).toFixed(2)}</p>
    </div>
  );
};

export default Cart;
