import React from 'react';
import { Table } from 'react-bootstrap';

const Order = () => {
  const orders = [
    { id: 101, customer: 'John Doe', total: '$150' },
    { id: 102, customer: 'Jane Smith', total: '$200' },
    { id: 103, customer: 'Alice Johnson', total: '$250' },
  ];

  return (
    <div>
      <h1>Order Management</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Order;
