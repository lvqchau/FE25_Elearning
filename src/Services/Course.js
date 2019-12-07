import * as yup from "yup";
import { restConnector } from "./Index";

const PAGE_INDEX = 1;
const ITEMS_PER_PAGE = 5;

const courseObject = {
  hinhAnh: yup.string().required("Please upload images"),
  maKhoaHoc: yup.string().required("Course code can not be empty"),
  maNhom: "G01",
  tenKhoaHoc: yup.string().required("Course name can not be empty"),
  moTa: yup.string()
};


class CourseService {
  fetchCourses(pageIndex = PAGE_INDEX, itemsPerPage = ITEMS_PER_PAGE) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${pageIndex}&pageSize=${itemsPerPage}&MaNhom=GP01`,
      method: "GET"
    });
  }
  fetchCourseType() {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
      method: "GET"
    });
  }
  addCourse(course) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/ThemKhoaHoc`,
      method: "POST",
      data: course
    });
  }
  uploadImageCourse(image) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
      method: "POST",
      data: image
    });
  }
  registerACourse(value) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
      method: "POST",
      data: value
    });
  }
  deleteUserFromCourse(value) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/HuyGhiDanh`,
      method: "POST",
      data: value
    });
  }
  fetchUserCourses(value) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      method: "POST",
      data: value
    });
  }
  fetchACourse(courseId) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`,
      method: "GET",
      data: courseId
    });
  }
  removeACourse(maKhoaHoc) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "DELETE"
    });
  }
  registerCourseFromUser(value) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
      method: "POST",
      data: value
    });
  }
}

export const AddCourseSchema = yup.object().shape(courseObject);
export default new CourseService();