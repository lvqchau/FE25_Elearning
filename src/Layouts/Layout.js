import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { actFetchCredentials } from "../Redux/Actions/User";
import { restConnector } from "../Services/Index";
import Footer from "./Footer";

const Layout = props => {
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
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default connect()(Layout);
