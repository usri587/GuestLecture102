// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './Login'
import AdminPage from './Admin';
import DashboardPage from './Dashboard'

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([
    { username: 'user1' },
    { username: 'user2' },
    { username: 'admin' }, // Assume admin user
  ]);

  const onDeleteUser = (usernameToDelete) => {
    // For simplicity, let's assume successful deletion
    setUsers(users.filter((user) => user.username !== usernameToDelete));
  };

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        loggedInUser ? <Component {...props} loggedInUser={loggedInUser} /> : <Redirect to="/" />
      }
    />
  );

  return (
    <Router>
      <Route path="/" exact>
        <LoginPage setLoggedInUser={setLoggedInUser} />
      </Route>
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
      <ProtectedRoute
        path="/admin"
        component={() => <AdminPage users={users} onDeleteUser={onDeleteUser} />}
      />
    </Router>
  );
};

export default App;
