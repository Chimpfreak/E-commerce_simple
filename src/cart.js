import React from 'react';

const Cart = ({ cart, removeFromCart, closeCart }) => {
  return (
    <div className="cart-overlay">
      <div className="cart">
        <button className="close-cart" onClick={closeCart}>
          <span>&times;</span>
        </button>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Cart Empty</p>
        ) : (
          <ul className="list-group">
            {cart.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                {product.name} - ${product.price}
                <button className="btn btn-danger" onClick={() => removeFromCart(product)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
