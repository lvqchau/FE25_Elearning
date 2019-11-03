import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles'
import Input from '@material-ui/core/Input';
import useForm from '../../../hook/useForm';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { addCourse, fetchCourseType } from '../../../Redux/Actions/Course';
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';

const styles = theme => ({

})

const AddCourse = props => {
  const { addCourseHandler, courseType, classes } = props
  const curDate = new Date().toISOString()
  const [selectedType, setType] = useState('')

  useEffect(() => {
    const { fetchCourseTypeHandler } = props
    fetchCourseTypeHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setSelectedValues = (e) => {
    setType(e.target.value)
    const maDanhMucKhoaHoc = {
      target: {
        name: 'maDanhMucKhoaHoc',
        value: e.target.value
      }
    }
    setFormValues(maDanhMucKhoaHoc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  useEffect(() => {
    if (courseType && courseType[0]) {
      setType(courseType[0].maDanhMuc)
      const maDanhMucKhoaHoc = {
        target: {
          name: 'maDanhMucKhoaHoc',
          value: courseType[0].maDanhMuc
        }
      }
      setFormValues(maDanhMucKhoaHoc)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseType])

  const [form, setFormValues, checkValidation] = useForm({
    values: {
      maKhoaHoc: '',
      tenKhoaHoc: '', 
      maDanhMucKhoaHoc: '',
      moTa: '',
      hinhAnh: '',
    },
    errors: {
      maKhoaHoc: '',
      tenKhoaHoc: '',
      maDanhMucKhoaHoc: '',
      moTa: '',
      hinhAnh: '',
    },
  });

  // const [position, setPosition] = useMouseMove();
  //   console.log(position);

  const themKhoaHoc = () => {
    const { values } = form
    const { tenKhoaHoc } = values
    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const dateArr = curDate.split('T')[0].split('-')
    const course = {
      ...values,
      maLoaiNguoiDung: 'GV',
      maNhom: 'G01',
      nguoiTao: {
        taiKhoan: userLogin.taiKhoan,
        hoTen: userLogin.hoTen,
        maLoaiNguoiDung: 'GV',
        tenLoaiNguoiDung: 'Giáo vụ'
      },
      ngayTao: dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0],
      biDanh: tenKhoaHoc.replace(/\s\s+/g, ' ').replace(/ /g, "-")
    }
    addCourseHandler(course)
    console.log(course)
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mã khoá học</label>
          <Input
            name="maKhoaHoc"
            className="form-control"
            value={form.values.maKhoaHoc}
            onChange={setFormValues}
            onBlur={checkValidation}
            // onMouseMove={setPosition}
          />
          {form.errors.maKhoaHoc && <div>{form.errors.maKhoaHoc}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên khoá học</label>
          <Input
            name="tenKhoaHoc"
            className="form-control"
            value={form.values.tenKhoaHoc}
            onChange={setFormValues}
            onBlur={checkValidation}
          />
          {form.errors.tenKhoaHoc && <div>{form.errors.tenKhoaHoc}</div>}
        </div>
      </div>
      <div className="col-sm-6">
        <FormControl className={classes.formControl}>
          <InputLabel>Age</InputLabel>
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

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mô tả khoá học</label>
          <Input
            name="moTa"
            className="form-control"
            value={form.values.moTa}
            onChange={setFormValues}
            onBlur={checkValidation}
          />
          {form.errors.moTa && <div>{form.errors.moTa}</div>}
        </div>

        

        {/* <div className="form-group">
          <label htmlFor="exampleInputEmail1">Hình ảnh khoá học</label>
          <Input
            name="hinhAnh"
            className="form-control"
            value={form.values.hinhAnh}
            onChange={setFormValues}
            onBlur={checkValidation}
          />
          {form.errors.hinhAnh && <div>{form.errors.hinhAnh}</div>}
        </div> */}
      </div>
      <button className="btn btn-success" onClick={themKhoaHoc}>
        Thêm
      </button>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    courseType: state.course.courseType,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addCourseHandler: addCourse,
  fetchCourseTypeHandler: fetchCourseType
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddCourse));
