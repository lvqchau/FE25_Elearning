import * as yup from "yup";
import { restConnector } from "./Index";

const PAGE_INDEX = 1;
const ITEMS_PER_PAGE = 5;

const userObject = {
  taiKhoan: yup
    .string()
    .required("Vui lòng nhập tài khoản")
    .min(8, "Tài khoản phải có từ 8 tới 16 kí tự")
    .max(16, "Tài khoản phải có từ 8 tới 16 kí tự"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có từ 8 tới 16 kí tự")
    .max(16, "Mật khẩu phải có từ 8 tới 16 kí tự"),
  hoTen: yup
    .string()
    .required("Vui lòng nhập họ tên")
    .matches(/^[a-zA-Z ]*$/, "Họ tên phải là chữ"),
  email: yup
    .string()
    .required("Vui lòng nhập Email")
    .email("Email không đúng định dạng"),
  soDT: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(
      /^((09|03|07|08|05)+([0-9]{8})\b)$/,
      "Số điện thoại không đúng định dạng (09, 07, 08, 05, 03)"
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
    return restConnector({
      url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: value
    });
  }
  getWaitingStudents(course) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
      method: 'POST',
      data: course,
    });
  }
  getCurrentStudents(course) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,
      method: 'POST',
      data: course,
    });
  }
}
export default new UserService();
