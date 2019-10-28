import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthAdmin = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={routeProps => {
        const user = JSON.parse(localStorage.getItem('userLogin'));
        if (user) {
          if (user.maLoaiNguoiDung === 'GV') {
            return (
              <Component {...routeProps} />
            );
          }
          return <Redirect to="/" />;
        }
        alert('Log in please!');
        return <Redirect to="/signin" />;
      }}
    />
  );
};

export default AuthAdmin;
