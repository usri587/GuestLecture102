// src/LoginPage.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // For simplicity, let's assume successful login
    setLoggedInUser({ username });
    history.push('/dashboard');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
