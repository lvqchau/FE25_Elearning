import { restConnector } from './Index';

const PAGE_INDEX = 1;
const ITEMS_PER_PAGE = 10;

class CourseService {
  fetchCourses(pageIndex = PAGE_INDEX, itemsPerPage = ITEMS_PER_PAGE) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${pageIndex}&pageSize=${itemsPerPage}&MaNhom=GP09`,
      method: 'GET',
    });
  }
  addCourse(course) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/ThemKhoaHoc`,
      method: 'POST',
      data: course,
    });
  }
  uploadImageCourse(image) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
      method: 'POST',
      data: image,
    });
  }
}
export default new CourseService();
