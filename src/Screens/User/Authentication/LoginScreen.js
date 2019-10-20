import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { fetchCredential } from "../../../Redux/Actions/User";
const LoginScreen = props => {
  const _handleSubmit = value => {
    props.dispatch(fetchCredential(value, props.history));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <Formik
            initialValues={{
              taiKhoan: props.location.state
                ? props.location.state.taiKhoan
                : "",
              matKhau: props.location.state ? props.location.state.matKhau : ""
            }}
            onSubmit={_handleSubmit}
            render={({ handleChange, values }) => (
              <Form>
                <h4 className="display-4">Đăng Nhập</h4>
                <div className="form-group">
                  <label htmlFor>Tài Khoản</label>
                  <input
                    type="text"
                    name="taiKhoan"
                    onChange={handleChange}
                    className="form-control"
                    value={values.taiKhoan}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Mật Khẩu</label>
                  <input
                    type="text"
                    name="matKhau"
                    onChange={handleChange}
                    value={values.matKhau}
                    className="form-control"
                  />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-success">
                    Đăng nhập
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default connect()(LoginScreen);
