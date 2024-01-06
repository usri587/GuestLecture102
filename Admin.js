// src/AdminPage.js

import React from 'react';

const AdminPage = ({ users, onDeleteUser }) => {
  return (
    <div>
      <h2>Admin Page</h2>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            {user.username}{' '}
            <button onClick={() => onDeleteUser(user.username)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
