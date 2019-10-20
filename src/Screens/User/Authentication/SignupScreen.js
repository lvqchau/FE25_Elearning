import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { SignUpUserSchema } from "../../../Services/User";
import { restConnector } from "../../../Services/Index";

const SignupScreen = props => {
  const _handleSubmit = value => {
    props.history.push("/signin" , {
      taiKhoan: value.taiKhoan,
      matKhau: value.matKhau
    });

    restConnector({
      url: "/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: value
    })
      .then(res => {
        // props.history.replace('/signin')
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              email: "",
              soDT: "",
              maNhom: "GP01"
            }}
            onSubmit={_handleSubmit}
            // validationSchema={SignUpUserSchema}
            render={formikProps => (
              <Form>
                <h4 className="display-4">Đăng Ký</h4>
                <div className="form-group">
                  <label>Tài Khoản</label>
                  <Field
                    type="text"
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                    className="form-control"
                  />
                  {formikProps.errors.taiKhoan &&
                    formikProps.touched.taiKhoan && (
                      <p className="alert alert-danger">
                        {formikProps.errors.taiKhoan}
                      </p>
                    )}
                </div>
                <div className="form-group">
                  <label htmlFor>Mật Khẩu</label>
                  <Field
                    type="password"
                    name="matKhau"
                    onChange={formikProps.handleChange}
                    className="form-control"
                  />
                  {formikProps.errors.matKhau &&
                    formikProps.touched.matKhau && (
                      <p className="alert alert-danger">
                        {formikProps.errors.matKhau}
                      </p>
                    )}
                </div>
                <div className="form-group">
                  <label htmlFor>Họ Tên: </label>
                  <Field
                    type="text"
                    name="hoTen"
                    onChange={formikProps.handleChange}
                    className="form-control"
                  />
                  {formikProps.errors.hoTen && formikProps.touched.hoTen && (
                    <p className="alert alert-danger">
                      {formikProps.errors.hoTen}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor>Email</label>
                  <Field
                    type="email"
                    name="email"
                    onChange={formikProps.handleChange}
                    className="form-control"
                  />
                  {formikProps.errors.email && formikProps.touched.email && (
                    <p className="alert alert-danger">
                      {formikProps.errors.email}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor>Số ĐT</label>
                  <Field
                    type="text"
                    name="soDT"
                    onChange={formikProps.handleChange}
                    className="form-control"
                  />
                  {formikProps.errors.soDT && formikProps.touched.soDT && (
                    <p className="alert alert-danger">
                      {formikProps.errors.soDT}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <button className="btn btn-success" type="submit">
                    Đăng Ký
                  </button>
                </div>
              </Form>
            )}
          ></Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
