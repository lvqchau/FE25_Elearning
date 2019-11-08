import React from "react";
import { Formik, Form } from "formik";
import { SignUpUserSchema } from "../../../Services/User";
import { restConnector } from "../../../Services/Index";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Box, Typography, Container } from "@material-ui/core";
import { signupUser } from "../../../Redux/Actions/User";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const styles = theme => ({
  Paper: {
    "&.MuiPaper-root": {
      padding: 25,
      marginTop: 15
    }
  },
  ErrorText: {
    marginTop: 8,
    fontSize: 12
  }
});

const SignupScreen = props => {
  const { signupHandler } = props;
  const _handleSubmit = value => {
    // props.history.push("/signin", {
    //   taiKhoan: value.taiKhoan,
    //   matKhau: value.matKhau
    // });
    console.log(value);

    props.dispatch(signupUser(value, props.history));

    // signupHandler(value); để châu về tìm hiểu

    // props.dispatch(signupUser(value));

    // restConnector({
    //   url: "/api/QuanLyNguoiDung/DangKy",
    //   method: "POST",
    //   data: value
    // })
    //   .then(res => {
    //     // props.history.replace('/signin')
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
              <Container fixed>
                <Paper className={props.classes.Paper}>
                  <Form>
                    <Typography variant="h4" gutterBottom>
                      Đăng Ký
                    </Typography>
                    <div className="form-group">
                      <TextField
                        placeholder="Nhập tên tài khoản"
                        label="Tài Khoản"
                        type="text"
                        name="taiKhoan"
                        onChange={formikProps.handleChange}
                        className="form-control"
                        fullWidth
                        error={
                          formikProps.errors.taiKhoan &&
                          formikProps.touched.taiKhoan
                        }
                      />
                      {formikProps.errors.taiKhoan &&
                        formikProps.touched.taiKhoan && (
                          <Box
                            className={props.classes.ErrorText}
                            color="error.main"
                          >
                            *{formikProps.errors.taiKhoan}
                          </Box>
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
                        error={
                          formikProps.errors.matKhau &&
                          formikProps.touched.matKhau
                        }
                      />
                      {formikProps.errors.matKhau &&
                        formikProps.touched.matKhau && (
                          <Box
                            className={props.classes.ErrorText}
                            color="error.main"
                          >
                            *{formikProps.errors.matKhau}
                          </Box>
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
                        error={
                          formikProps.errors.hoTen && formikProps.touched.hoTen
                        }
                      />
                      {formikProps.errors.hoTen && formikProps.touched.hoTen && (
                        <Box
                          className={props.classes.ErrorText}
                          color="error.main"
                        >
                          *{formikProps.errors.hoTen}
                        </Box>
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
                        error={
                          formikProps.errors.email && formikProps.touched.email
                        }
                      />
                      {formikProps.errors.email && formikProps.touched.email && (
                        <Box
                          className={props.classes.ErrorText}
                          color="error.main"
                        >
                          *{formikProps.errors.email}
                        </Box>
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
                        error={
                          formikProps.errors.soDT && formikProps.touched.soDT
                        }
                      />
                      {formikProps.errors.soDT && formikProps.touched.soDT && (
                        <Box
                          className={props.classes.ErrorText}
                          color="error.main"
                        >
                          *{formikProps.errors.soDT}
                        </Box>
                      )}
                    </div>

                    <div className="form-group">
                      <Button type="submit" variant="contained" color="primary">
                        Đăng Ký
                      </Button>
                    </div>
                  </Form>
                </Paper>
              </Container>
            )}
          ></Formik>
        </div>
      </div>
    </div>
  );
};
//test

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signupHandler: signupUser
    },
    dispatch
  );

export default connect(mapDispatchToProps)(withStyles(styles)(SignupScreen));
