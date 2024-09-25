import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ height: '100vh', width: '240px' }}>
      <Nav className="flex-column">
        <LinkContainer to="/">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/product">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/order">
          <Nav.Link>Orders</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default Sidebar;
