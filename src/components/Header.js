import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/product">Products</a></li>
          <li><a href="/order">Orders</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
