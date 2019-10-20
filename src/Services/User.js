import * as yup from "yup";
import { restConnector } from "./Index";

export const SignUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có từ 8 tới 16 kí tự")
    .max(16, "Mật khẩu phải có từ 8 tới 16 kí tự"),
  hoTen: yup
    .string()
    .required()
    .matches(/^[a-zA-Z ]*$/, "Họ tên phải là chữ"),
  email: yup
    .string()
    .required()
    .email("Email không đúng định dạng"),
  soDT: yup
    .string()
    .required()
    .matches(/^[0-9]*$/, "Vui lòng nhập số")
});

class UserService {
  login(value){
    return restConnector({
      url: "/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: value
    })
  }
}
export default  new UserService();
