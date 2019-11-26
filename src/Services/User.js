import * as yup from "yup";
import { restConnector } from "./Index";

const PAGE_INDEX = 1;
const ITEMS_PER_PAGE = 5;

const userObject = {
  taiKhoan: yup
    .string()
    .required("Username can not be empty")
    .min(8, "Username must be between 8 to 10 characters")
    .max(16, "Username must be between 8 to 10 characters"),
  matKhau: yup
    .string()
    .required("Password can not be empty")
    .min(8, "Password must be between 8 to 10 characters")
    .max(16, "Password must be between 8 to 10 characters"),
  hoTen: yup
    .string()
    .required("Name can not be empty")
    .matches(/^[a-zA-Z ]*$/, "Name must contain only letters"),
  email: yup
    .string()
    .required("Email can not be empty")
    .email("Email format is wrong"),
  soDT: yup
    .string()
    .required("Phone number can not be empty")
    .matches(
      /^((09|03|07|08|05)+([0-9]{8})\b)$/,
      "Phone number must have (09, 07, 08, 05, 03) and contain 10 numbers"
    )
};

const adminObject = {
  ...userObject,
  maLoaiNguoiDung: yup.string()
};

export const AddUserSchema = yup.object().shape(adminObject);

export const SignUpUserSchema = yup.object().shape(userObject);

class UserService {
  fetchUsers(pageIndex = PAGE_INDEX, itemsPerPage = ITEMS_PER_PAGE) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?page=${pageIndex}&pageSize=${itemsPerPage}&MaNhom=GP01`,
      method: "GET"
    });
  }
  addUser(user) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: user
    });
  }
  login(value) {
    return restConnector({
      url: "/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: value
    });
  }
  signup(value) {
    return restConnector({
      url: "/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: value
    });
  }
  fetchUserInfo(value) {
    console.log(restConnector);
    return restConnector({
      url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: value
    });
  }
  getWaitingStudents(course) {
    return restConnector({
      url: '/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',
      method: 'POST',
      data: course,
    });
  }
  getCurrentStudents(course) {
    return restConnector({
      url: '/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc',
      method: 'POST',
      data: course,
    });
  }

  getWaitingCourses(user) {
    return restConnector({
      url: '/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet',
      method: 'POST',
      data: user
    })
  }
  getCurrentCourses(user) {
    return restConnector({
      url: '/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet',
      method: 'POST',
      data: user
    })
  }
  removeAUser(taiKhoan) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE"
    });
  }
}
export default new UserService();
