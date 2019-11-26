import { restConnector } from "./Index";

const PAGE_INDEX = 1;
const ITEMS_PER_PAGE = 5;

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
    console.log(restConnector);
    return restConnector({
      url: `/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      method: "POST",
      data: value
    });
  }
}
export default new CourseService();
