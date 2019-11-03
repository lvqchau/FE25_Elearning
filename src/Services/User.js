import * as yup from "yup";
import { restConnector } from "./Index";

const PAGE_INDEX = 1;
const ITEMS_PER_PAGE = 5;

export const SignUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có từ 8 tới 16 kí tự")
    .max(16, "Mật khẩu phải có từ 8 tới 16 kí tự"),
  hoTen: yup
    .string()
    .required("Vui lòng nhập Họ Tên"),
    // .matches(/^[a-zA-Z ]*$/, "Họ tên phải là chữ"),
  email: yup
    .string()
    .required("Vui lòng nhập Email")
    .email("Email không đúng định dạng"),
  soDT: yup
    .string()
    .required("Vui lòng nhập Số điện thoại")
    .matches(/^[0-9]*$/, "Vui lòng nhập số")
});

class UserService {
  fetchUsers(pageIndex = PAGE_INDEX, itemsPerPage = ITEMS_PER_PAGE) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?page=${pageIndex}&pageSize=${itemsPerPage}&MaNhom=GP01`,
      method: 'GET',
    });
  }
  addUser(user) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: 'POST',
      data: user,
    });
  }
  login(value) {
    return restConnector({
      url: "/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: value
    });
  }
}
export default new UserService();
