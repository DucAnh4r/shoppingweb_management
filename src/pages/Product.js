import React from 'react';
import { Table } from 'react-bootstrap';

const Product = () => {
  const productList = [
    { id: 1, name: 'Product 1', price: '$100' },
    { id: 2, name: 'Product 2', price: '$200' },
    { id: 3, name: 'Product 3', price: '$300' },
  ];

  return (
    <div>
      <h1>Product Management</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Product;
