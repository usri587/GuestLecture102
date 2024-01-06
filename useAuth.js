// useAuth.js
import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data));
      setUser(data);
    } catch (error) {
      throw new Error('Login failed. Invalid credentials or server error.');
    }
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
