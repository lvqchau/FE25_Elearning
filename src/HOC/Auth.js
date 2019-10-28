import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticationRoute = ({ path, component: Component }) => {
  return (
    <Route
      path={path}
      render={routeProps => {
        if (localStorage.getItem('userLogin')) {
          return (
            <Component {...routeProps} />
          );
        }
        alert('Log in please!');
        return <Redirect to="/signin" />;
      }}
    />
  );
};

export default AuthenticationRoute;
