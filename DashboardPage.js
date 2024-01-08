// DashboardPage.js
// eslint-disable-next-line no-restricted-globals
import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const DashboardPage = () => {
  const auth = useAuth();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Check if the user is authenticated before fetching student data
    if (auth.user) {
      // Fetch student data from the backend API
      axios.get('http://localhost:3001/api/students')
        .then((response) => setStudents(response.data))
        .catch((error) => console.error('Error fetching students:', error));
    }
  }, [auth.user]); // Run the effect when the user is authenticated

  return (
    <div>
      <h2>Welcome to the Dashboard, {auth.user?.username}!</h2>
      <h3>Student List:</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
