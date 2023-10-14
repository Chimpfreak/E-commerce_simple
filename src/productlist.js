import React from 'react';
import './productlist.css'; // Make sure to import the correct CSS file
import { Card, Button } from 'react-bootstrap'; // Import Card and Button components from react-bootstrap

const ProductList = ({ addToCart }) => {
    const products = [
        {
          id: 1,
          name: 'Cotton Printed Dress',
          price: 10,
          image: 'https://i.ibb.co/Y0vfvpq/product1.jpg', // Update with the correct image URL
        },
        {
          id: 2,
          name: 'Jute outfit peach and pink',
          price: 15,
          image: 'https://i.ibb.co/342PDy6/product2.jpg', // Update with the correct image URL
        },
        {
          id: 3,
          name: 'Jute outfit white and pink',
          price: 20,
          image: 'https://i.ibb.co/qCbDkZw/product3.jpg', // Update with the correct image URL
        },
      ];

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <Card style={{ width: '18rem' }} className="card mb-4">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
