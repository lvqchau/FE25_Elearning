import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../Layouts/Layout';

const AuthenticationRoute = ({ path, component: Component }) => {
  return (
    <Route
      path={path}
      render={routeProps => {
        if (localStorage.getItem('userLogin')) {
          return (
            // <Layout>
            <Component {...routeProps} />
            // </Layout>
          );
        }
        alert('Log in please!');
        return <Redirect to="/signin" />;
      }}
    />
  );
};

export default AuthenticationRoute;
