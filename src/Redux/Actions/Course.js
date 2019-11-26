import {
  FETCH_COURSES,
  ADD_COURSE,
  CHANGE_PAGE_COURSES,
  FETCH_COURSE_TYPE,
  REGISTER_A_COURSE,
  DELETE_USER_FROM_COURSE,
  FETCH_USER_COURSES
} from "./ActionType";
import CourseService from "../../Services/Course";
import { successAlert, errorAlert } from "../../Components/ToastMessage";

//async action fetch courses from server and save to store
export const fetchCourses = (pageIndex, itemsPerPage) => {
  return dispatch => {
    CourseService.fetchCourses(pageIndex, itemsPerPage)
      .then(res => {
        dispatch(actFetchCourses(res.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const fetchCourseType = () => {
  return dispatch => {
    CourseService.fetchCourseType()
      .then(res => {
        dispatch(actFetchCourseType(res.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const addCourse = course => {
  return (dispatch, getState) => {
    // const { hinhAnh } = course;
    // course.hinhAnh = hinhAnh.name;
    CourseService.addCourse(course)
      .then(res => {
        successAlert("Thêm khoá học thành công");
        dispatch.actAddCourse(res.data);
        // const formData = new FormData();
        // formData.append(hinhAnh);
        // CourseService.uploadImageCourse(formData)
        //   .then(res => {
        //     const { course } = getState();
        //     const { pageIndex } = course;
        //     dispatch(fetchCourses(pageIndex, 5));
        //   })
        //   .catch(err => console.log(err));
      })
      .catch(err => {
        if (err.response !== undefined)
          errorAlert(err.response.data);
      });
  };
};

export const registerACourse = value => {
  return dispatch => {
    CourseService.registerACourse(value)
      .then(res => {
        dispatch(actRegisterACourse(value));
        successAlert("Đăng ký khoá học thành công");
      })
      .catch(e => {
        console.log(e);
        errorAlert("Đăng ký khoá học không thành công");
      });
  };
};

export const deleteUserFromCourse = (value, type) => {
  return dispatch => {
    CourseService.deleteUserFromCourse(value)
      .then(res => {
        dispatch(actDeleteUserFromCourse(value, type));
        successAlert("Huỷ ghi danh thành công");
      })
      .catch(e => {
        console.log(e);
        errorAlert("Huỷ ghi danh không thành công");
      });
  };
};

export const fetchUserCourses = value => {
  return dispatch => {
    CourseService.fetchUserCourses(value)
      .then(res => {
        dispatch(actFetchUserCourses(res.data));
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

//action creators
export const actFetchCourses = courses => {
  return {
    type: FETCH_COURSES,
    payload: courses
  };
};

export const actFetchCourseType = courseType => {
  return {
    type: FETCH_COURSE_TYPE,
    payload: courseType
  };
};

export const actAddCourse = course => {
  return {
    type: ADD_COURSE,
    payload: course
  };
};

export const changePageCourse = pageIndex => {
  return {
    type: CHANGE_PAGE_COURSES,
    payload: pageIndex
  };
};

export const actRegisterACourse = value => {
  return {
    type: REGISTER_A_COURSE,
    payload: value
  };
};

export const actDeleteUserFromCourse = value => {
  return {
    type: DELETE_USER_FROM_COURSE,
    payload: value
  };
};

export const actFetchUserCourses = userCourses => {
  return {
    type: FETCH_USER_COURSES,
    payload: userCourses
  };
};
