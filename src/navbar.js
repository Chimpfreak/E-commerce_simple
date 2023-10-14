import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CustomNavbar = ({ cartCount, toggleCart }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Eco-Zara</Navbar.Brand>
        <div className="ml-auto">
          <button className="btn btn-link cart-icon" onClick={toggleCart}>
            <FaShoppingCart size={24} />
            <span className="badge badge-pill badge-primary">{cartCount}</span>
          </button>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
