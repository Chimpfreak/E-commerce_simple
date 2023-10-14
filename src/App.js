import React, { useState } from 'react';
import './App.css';
import ProductList from './productlist';
import Navbar from './navbar';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <>
      <Navbar cartCount={cart.length} toggleCart={toggleCart} />
      <div className="container mt-4">
        <h1 className="text-center">Eco-Friendly Dresses</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-wrap">
              <ProductList addToCart={addToCart} />
            </div>
          </div>
        </div>
        {isCartOpen && (
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
                      <div className="card mb-3" style={{ maxWidth: '12rem' }}>
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">${product.price}</p>
                          <button className="btn btn-danger" onClick={() => removeFromCart(product)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
