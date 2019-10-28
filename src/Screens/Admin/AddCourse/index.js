import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import useForm from '../../../hook/useForm';
import useMouseMove from '../../../hook/useMouseMove';

const AddCourse = () => {
    const [values, setValues] = useState({
      maKhoaHoc: '',
      tenKhoaHoc: '',
      maDanhMucKhoaHoc: '',
    });

    const handleChange = evt => {
      setValues({ ...values, [evt.target.name]: evt.target.value });
    };

  const [form, setFormValues, checkValidation] = useForm({
    values: {
      maKhoaHoc: '',
      tenKhoaHoc: '',
      taiKhoanNguoiTao: '',
      maDanhMucKhoaHoc: '',
      moTa: '',
      hinhAnh: '',
    },
    errors: {
      maKhoaHoc: '',
      tenKhoaHoc: '',
      taiKhoanNguoiTao: '',
      maDanhMucKhoaHoc: '',
      moTa: '',
      hinhAnh: '',
    },
  });

  const [position, setPosition] = useMouseMove();
  //   console.log(position);

  const themKhoaHoc = () => {
    console.log(form.values);
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

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tài khoản người tạo</label>
          <Input
            name="taiKhoanNguoiTao"
            className="form-control"
            value={form.values.taiKhoanNguoiTao}
            onChange={setFormValues}
            onBlur={checkValidation}
          />
          {form.errors.taiKhoanNguoiTao && (
            <div>{form.errors.taiKhoanNguoiTao}</div>
          )}
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mã danh mục khoá học</label>
          <Input
            name="maDanhMucKhoaHoc"
            className="form-control"
            value={form.values.maDanhMucKhoaHoc}
            onChange={setFormValues}
            onBlur={checkValidation}
          />
          {form.errors.maDanhMucKhoaHoc && (
            <div>{form.errors.maDanhMucKhoaHoc}</div>
          )}
        </div>

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

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Hình ảnh khoá học</label>
          <Input
            name="hinhAnh"
            className="form-control"
            value={form.values.hinhAnh}
            onChange={setFormValues}
            onBlur={checkValidation}
          />
          {form.errors.hinhAnh && <div>{form.errors.hinhAnh}</div>}
        </div>
      </div>
      <button className="btn btn-success" onClick={themKhoaHoc}>
        Thêm
      </button>
    </div>
  );
};

export default AddCourse;
