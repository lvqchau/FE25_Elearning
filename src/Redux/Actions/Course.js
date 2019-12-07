import {
  FETCH_COURSES,
  ADD_COURSE,
  FETCH_A_COURSE,
  CHANGE_PAGE_COURSES,
  FETCH_COURSE_TYPE,
  REGISTER_A_COURSE,
  DELETE_USER_FROM_COURSE,
  FETCH_USER_COURSES,
  REMOVE_COURSE
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
        
      });
  };
};

export const addCourse = course => {
  return (dispatch, getState) => {
    CourseService.addCourse(course)
      .then(res => {
        successAlert("Thêm khoá học thành công");
        dispatch.actAddCourse(res.data);
      })
      .catch(err => {
        if (err.response !== undefined) errorAlert(err.response.data);
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
        errorAlert("Huỷ ghi danh không thành công");
      });
  };
};

export const fetchUserCourses = value => {
  return dispatch => {
    CourseService.fetchUserCourses(value)
      .then(res => {
        dispatch(actFetchUserCourses(res.data));
      })
      .catch(err => {
        errorAlert(err.response.data);
      });
  };
};

export const removeCourse = course => {
  return dispatch => {
    CourseService.removeACourse(course)
      .then(res => {
        successAlert("Xoá khoá học thành công")
        dispatch(actRemoveCourse(course));
      })
      .catch(err => {
        errorAlert(err.response.data);
      });
  };
};

export const registerCourseFromUser = value => {
  return dispatch => {
    CourseService.registerCourseFromUser(value)
      .then(res => {
        successAlert("Đăng kí thành công! Chờ xác nhận từ admin");
      })
      .catch(e => {
        errorAlert("Đăng ký khoá học không thành công");
      });
  };
};

export const fetchACourse = courseId => {
  return dispatch => {
    CourseService.fetchACourse(courseId)
      .then(res => {
        dispatch(actFetchACourse(res.data));
      })
      .catch(err => {});
  };
};

//action creators
export const actFetchCourses = courses => {
  return {
    type: FETCH_COURSES,
    payload: courses
  };
};

export const actFetchACourse = course => {
  return {
    type: FETCH_A_COURSE,
    payload: course
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

export const actRemoveCourse = deletedCourse => {
  return {
    type: REMOVE_COURSE,
    payload: deletedCourse
  };
};
