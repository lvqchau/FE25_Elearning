import React from "react";
import { Formik, Form } from "formik";
import { SignUpUserSchema } from "../../../Services/User";
import { restConnector } from "../../../Services/Index";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  test: {
    "&.MuiPaper-root": {
      padding: 25,
      marginTop: 15
    }
  }
});

const SignupScreen = props => {
  const _handleSubmit = value => {
    props.history.push("/signin", {
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
              maNhom: "GP01",
              maLoaiNguoiDung: "GV"
            }}
            onSubmit={_handleSubmit}
            validationSchema={SignUpUserSchema}
            render={formikProps => (
              <Paper className={props.classes.test}>
                <Form>
                  <h4 className="display-4">Đăng Ký</h4>
                  <div className="form-group">
                    <TextField
                      placeholder="Nhập tên tài khoản"
                      label="Tài Khoản"
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
                    <TextField
                      placeholder="Nhập mật khẩu"
                      label="Mật Khẩu"
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
                    <TextField
                      placeholder="Nhập Họ và Tên"
                      label="Họ Tên"
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
                    <TextField
                      placeholder="Nhập Email"
                      label="Email"
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
                    <TextField
                      placeholder="Nhập Số điện thoại"
                      label="Số Điện Thoại"
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
                    <Button type="submit" variant="contained" color="primary">
                      Đăng Ký
                    </Button>
                  </div>
                </Form>
              </Paper>
            )}
          ></Formik>
        </div>
      </div>
    </div>
  );
};
//test

export default withStyles(styles)(SignupScreen);
