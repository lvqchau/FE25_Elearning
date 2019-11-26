import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputField from '../../../../Components/InputField';
import { Formik, Form } from 'formik';
import { AddUserSchema } from '../../../../Services/User';

const styles = theme => ({

})

const AddUser = (props) => {
  const { addUserHandler, classes, isFixing, user } = props
  const [fixUser, setFixUser] = React.useState(
    isFixing 
      ?
      {
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        hoTen: user.hoTen,
        email: user.email,
        soDT: user.soDT,
        maNhom: "GP01",
        maLoaiNguoiDung: "HV"
      }
      :
      {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "HV"
      }
  )

  const handleFormChange = (event) => {
    setFixUser({
      ...fixUser,
      [event.target.name]: event.target.value
    })
  }

  const themNguoiDung = (value) => {
    addUserHandler(value)
  };

  useEffect(() => {
    
  },[user])

  return (
    <div className="row">
      <Formik
        initialValues={fixUser}
        onSubmit={themNguoiDung}
        validationSchema={AddUserSchema}
        render={formikProps => (
          <Form className='row' style={{ width: '90vw', margin: 'auto' }}>
            <div className="col-sm-6">
              <div className="form-group">
                <InputField
                  placeholder="Username"
                  label="Username"
                  type="text"
                  name="taiKhoan"
                  value={fixUser.taiKhoan}
                  touched={formikProps.errors.taiKhoan}
                  error={formikProps.errors.taiKhoan}
                  handleChange={handleFormChange}
                  className="form-control"
                />
              </div>
              {
                isFixing ?
                  <></> :
                  <div className="form-group">
                    <InputField
                      placeholder="Password"
                      label="Password"
                      type="password"
                      name="matKhau"
                      touched={formikProps.errors.matKhau}
                      error={formikProps.errors.matKhau}
                      handleChange={handleFormChange}
                      className="form-control"
                    />
                  </div>    
              }
              <div className="form-group">
                <InputField
                  placeholder="Fullname"
                  label="Fullname"
                  type="text"
                  name="hoTen"
                  value={fixUser.hoTen}
                  touched={formikProps.errors.hoTen}
                  error={formikProps.errors.hoTen}
                  handleChange={handleFormChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <InputField
                  placeholder="Email"
                  label="Email"
                  type="email"
                  name="email"
                  value={fixUser.email}
                  touched={formikProps.errors.email}
                  error={formikProps.errors.email}
                  handleChange={handleFormChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <InputField
                  placeholder="Phone number"
                  label="Phone number"
                  type="text"
                  name="soDT"
                  value={fixUser.soDT}
                  touched={formikProps.errors.soDT}
                  error={formikProps.errors.soDT}
                  handleChange={handleFormChange}
                  className="form-control"
                />
              </div>
              <FormControl className={classes.formControl} style={{ width: 120 }}>
                <InputLabel>User Type</InputLabel>
                <Select
                  name="maLoaiNguoiDung"
                  value={fixUser.maLoaiNguoiDung}
                  handleChange={handleFormChange}
                >
                  <MenuItem value='GV'>Giáo vụ</MenuItem>
                  <MenuItem value='HV'>Học viên</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <Button type="submit" variant="contained" color="primary">
                {
                  isFixing ? "Edit User" : "Add User"
                }
              </Button>
            </div>
          </Form>
        )}
      ></Formik>
    </div>
  );
};


export default withStyles(styles)(AddUser);