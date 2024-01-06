// src/DashboardPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = ({ loggedInUser }) => {
  return (
    <div>
      <h2>Welcome to Dashboard, {loggedInUser.username}!</h2>
      <Link to="/admin">Go to Admin Page</Link>
    </div>
  );
};

export default DashboardPage;
