// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import useAuth from './useAuth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth(); // Define auth here

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const App = () => {
  // eslint-disable-next-line
  const auth = useAuth(); // Define auth here

  const handleLoginSuccess = () => {
    // Navigation logic here, e.g., redirect to the dashboard
    console.log('User successfully logged in. Redirecting to dashboard...');
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* This is the login route */}
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        </Route>
        <ProtectedRoute path="/dashboard" component={DashboardPage} />
        {/* Other routes if needed */}
      </Switch>
    </Router>
  );
};

export default App;
