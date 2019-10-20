import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeScreen from './Screens/User/Home/HomeScreen';
import LoginScreen from './Screens/User/Authentication/LoginScreen';
import SignupScreen from './Screens/User/Authentication/SignupScreen';
import { actFetchCredentials } from './Redux/Actions/User';
import { restConnector } from './Services/Index';
import { actFetchCourses } from './Redux/Actions/Course';
import DetailScreen from './Screens/User/Detail/DetailScreen';
import AuthenticationRoute from './HOC/Auth';
import AuthAdmin from './HOC/AuthAdmin';
import Admin from './Screens/Admin';
import Layout from './Layouts/Layout';
import AdminLayout from './Layouts/AdminLayout';

function App(props) {
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
    <BrowserRouter>
      <Switch>
        <AdminLayout path="/admin">
          <Switch>
            <AuthAdmin path="/" component={Admin} />
          </Switch>
        </AdminLayout>
        <Layout path="/">
          <Switch>
            <Route exact path="/signin" component={LoginScreen} />
            <Route exact path="/signup" component={SignupScreen} />
            <AuthenticationRoute exact path="/" component={HomeScreen} />
            <AuthenticationRoute
              path="/detail/:courseId"
              component={DetailScreen}
            />
          </Switch>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default connect()(App);
