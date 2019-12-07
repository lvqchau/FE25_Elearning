import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputField from '../../../../Components/InputField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik, Form } from 'formik';
import { AddCourseSchema } from '../../../../Services/Course';

const AddCourse = props => {
  const { addCourseHandler, courseType } = props
  const curDate = new Date().toISOString()
  const [selectedType, setType] = useState('')

  useEffect(() => {
    const { fetchCourseTypeHandler } = props
    fetchCourseTypeHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setSelectedValues = (e) => {
    setType(e.target.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  useEffect(() => {
    if (courseType && courseType[0]) {
      setType(courseType[0].maDanhMuc)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseType])

  const themKhoaHoc = (values) => {
    const { tenKhoaHoc } = values
    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const dateArr = curDate.split('T')[0].split('-')
    const course = {
      ...values,
      maNhom: 'G01',
      maDanhMucKhoaHoc: selectedType,
      taiKhoanNguoiTao: userLogin.taiKhoan,
      ngayTao: dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0],
      biDanh: tenKhoaHoc.replace(/\s\s+/g, ' ').replace(/ /g, "-")
    }
    addCourseHandler(course)
  };

  return (
      <div className="row">
        <Formik
          initialValues={{
            hinhAnh: "",
            tenKhoaHoc: "",
            maDanhMucKhoaHoc: "",
            maKhoaHoc: "",
            maNhom: "G01",
            moTa: "",
          }}
          onSubmit={themKhoaHoc}
          validationSchema={AddCourseSchema}
          render={formikProps => (
            <Form className='row' style={{ width: '90vw', margin: 'auto' }}>
              <div className="col-sm-6">
                <div className="form-group">
                  <InputField
                    placeholder="Course ID"
                    label="Course ID"
                    type="text"
                    name="maKhoaHoc"
                    touched={formikProps.errors.maKhoaHoc}
                    error={formikProps.errors.maKhoaHoc}
                    handleChange={formikProps.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <InputField
                    placeholder="Course Name"
                    label="Course Name"
                    type="text"
                    name="tenKhoaHoc"
                    touched={formikProps.errors.tenKhoaHoc}
                    error={formikProps.errors.tenKhoaHoc}
                    handleChange={formikProps.handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <InputField
                    placeholder="Description"
                    label="Description"
                    type="text"
                    name="moTa"
                    touched={formikProps.errors.moTa}
                    error={formikProps.errors.moTa}
                    handleChange={formikProps.handleChange}
                    className="form-control"
                  />
                </div>
                <FormControl style={{ width: 120 }}>
                  <InputLabel>Course Code</InputLabel>
                  <Select
                    value={selectedType}
                    onChange={setSelectedValues}
                  >
                    {
                      courseType && courseType.map((item, index) => {
                        return <MenuItem key={index} value={item.maDanhMuc}>{item.tenDanhMuc}</MenuItem>
                      })
                    }
                  </Select>
                </FormControl>
              </div>
              <div className="form-group">
                <Button type="submit" variant="contained" color="primary">
                  Add Course
                </Button>
              </div>
            </Form>
          )}
        ></Formik>
      </div>
  );
};


export default AddCourse;
