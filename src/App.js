import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomeScreen from "./Screens/User/Home/HomeScreen";
import LoginScreen from "./Screens/User/Authentication/LoginScreen";
import SignupScreen from "./Screens/User/Authentication/SignupScreen";
import { actFetchCredentials } from "./Redux/Actions/User";
import { restConnector } from "./Services/Index";
import DetailScreen from "./Screens/User/Detail/DetailScreen";
import AuthenticationRoute from "./HOC/Auth";
import AuthAdmin from "./HOC/AuthAdmin";
import Admin from "./Screens/Admin";
import Layout from "./Layouts/Layout";
import AdminLayout from "./Layouts/AdminLayout";
import ControlUser from "./Screens/Admin/ControlUser";
import ControlCourse from "./Screens/Admin/ControlCourse";
import ProfileScreen from "./Screens/User/Profile/ProfileScreen";

function App(props) {
  useEffect(() => {
    let credentials = localStorage.getItem("userLogin");
    if (credentials) {
      let credetialsObj = JSON.parse(credentials);
      props.dispatch(actFetchCredentials(credetialsObj));

      restConnector.defaults.headers[
        "Authorization"
      ] = `Bearer ${credetialsObj.accessToken}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <AdminLayout path="/admin">
          <Switch>
            <AuthAdmin exact path="/admin" component={Admin} />
            <AuthAdmin exact path="/admin/users" component={ControlUser} />
            <AuthAdmin exact path="/admin/courses" component={ControlCourse} />
          </Switch>
        </AdminLayout>
        <Layout path="/">
          <Switch>
            <Route exact path="/thongtintaikhoan" component={ProfileScreen} />
            <Route exact path="/signin" component={LoginScreen} />
            <Route exact path="/signup" component={SignupScreen} />
            <AuthenticationRoute exact path="/" component={HomeScreen} />
            <AuthenticationRoute
              exact path="/detail/:courseId"
              component={DetailScreen}
            />
          </Switch>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

//Test git new branch

//Test git new branch 2

export default connect()(App);
