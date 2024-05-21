import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Energy Billing System</h1>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/invoices">Invoice Library</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
