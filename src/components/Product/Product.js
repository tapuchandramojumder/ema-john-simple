import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
  console.log(props);

  const { img, name, seller, price } = props.product;
  return (
    <div className="product">
      <div className="product-left">
        <img src={img} alt="" />
      </div>
      <div className="product-right">
        <h3>{name}</h3>
        <small>By: {seller}</small>
        <h4>Price: ${price}</h4>
        <p>only {props.product.stock} left in stock -Order soon</p>
        <button
          className="main-button"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
