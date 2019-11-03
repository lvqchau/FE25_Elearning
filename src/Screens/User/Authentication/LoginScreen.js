import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { fetchCredential } from "../../../Redux/Actions/User";
import { TextField, Paper, Button, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  Paper: {
    "&.MuiPaper-root": {
      padding: 25,
      marginTop: 15
    }
  }
});

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
              <Paper className={props.classes.Paper}>
                <Form>
                  <Typography variant="h4" gutterBottom>
                    Đăng Nhập
                  </Typography>
                  <div className="form-group">
                    <TextField
                      label="Tài Khoản"
                      placeholder="Vui lòng nhập tài khoản"
                      type="text"
                      name="taiKhoan"
                      onChange={handleChange}
                      className="form-control"
                      value={values.taiKhoan}
                    />
                  </div>
                  <div className="form-group">
                    <TextField
                      label="Mật Khẩu"
                      placeholder="Vui lòng nhập mật khẩu"
                      type="text"
                      name="matKhau"
                      onChange={handleChange}
                      value={values.matKhau}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <Button type="submit" variant="contained" color="primary">
                      Đăng nhập
                    </Button>
                  </div>
                </Form>
              </Paper>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default connect()(withStyles(styles)(LoginScreen));
