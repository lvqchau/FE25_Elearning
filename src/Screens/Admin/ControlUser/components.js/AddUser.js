import React from 'react';
import { withStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { bindActionCreators } from 'redux';
import { addUser } from '../../../../Redux/Actions/User';
import InputField from '../../../../Components/InputField';
import { Formik, Form } from 'formik';
import { AddUserSchema } from '../../../../Services/User';

const styles = theme => ({

})

const AddUser = (props) => {
  const { addUserHandler, classes } = props
  const themNguoiDung = (value) => {
    addUserHandler(value)
  };

  return (
    <div className="row">
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          hoTen: "",
          email: "",
          soDT: "",
          maNhom: "GP01",
          maLoaiNguoiDung: "HV"
        }}
        onSubmit={themNguoiDung}
        validationSchema={AddUserSchema}
        render={formikProps => (
          <Form className='row' style={{ width: '90vw', margin: 'auto' }}>
            <div className="col-sm-6">
              <div className="form-group">
                <InputField
                  placeholder="Tài khoản"
                  label="Tài Khoản"
                  type="text"
                  name="taiKhoan"
                  touched={formikProps.errors.taiKhoan}
                  error={formikProps.errors.taiKhoan}
                  handleChange={formikProps.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <InputField
                  placeholder="Mật khẩu"
                  label="Mật Khẩu"
                  type="password"
                  name="matKhau"
                  touched={formikProps.errors.matKhau}
                  error={formikProps.errors.matKhau}
                  handleChange={formikProps.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <InputField
                  placeholder="Họ Tên"
                  label="Họ Tên"
                  type="text"
                  name="hoTen"
                  touched={formikProps.errors.hoTen}
                  error={formikProps.errors.hoTen}
                  handleChange={formikProps.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <InputField
                  placeholder="Eail"
                  label="Email"
                  type="email"
                  name="email"
                  touched={formikProps.errors.email}
                  error={formikProps.errors.email}
                  handleChange={formikProps.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <InputField
                  placeholder="Số điện thoại"
                  label="Số Điện Thoại"
                  type="text"
                  name="soDT"
                  touched={formikProps.errors.soDT}
                  error={formikProps.errors.soDT}
                  handleChange={formikProps.handleChange}
                  className="form-control"
                />
              </div>
              <FormControl className={classes.formControl} style={{ width: 120 }}>
                <InputLabel>Mã người dùng</InputLabel>
                <Select
                  name="maLoaiNguoiDung"
                  value={formikProps.values.maLoaiNguoiDung}
                  onChange={formikProps.handleChange}
                >
                  <MenuItem value='GV'>Giáo vụ</MenuItem>
                  <MenuItem value='HV'>Học viên</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <Button type="submit" variant="contained" color="primary">
                Thêm
                </Button>
            </div>
          </Form>
        )}
      ></Formik>
    </div>
  );
};


export default withStyles(styles)(AddUser);