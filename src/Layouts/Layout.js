import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { actFetchCredentials } from '../Redux/Actions/User';
import { restConnector } from '../Services/Index';

const Layout = props => {
  useEffect(() => {
    let credentials = localStorage.getItem('userLogin');
    if (credentials) {
      let credetialsObj = JSON.parse(credentials);
      props.dispatch(actFetchCredentials(credetialsObj));

      restConnector.defaults.headers[
        'Authorization'
      ] = `Bearer ${credetialsObj.accessToken}`;
    }
    //clean up component
    // return () => {

    // }
  }, []);

  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default connect()(Layout);
