import { FETCH_COURSES, ADD_COURSE, CHANGE_PAGE_COURSES, FETCH_COURSE_TYPE } from './ActionType';
import CourseService from '../../Services/Course';
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
        dispatch.actAddCourse(res.data)
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
      .catch(err => console.log(err.response));
  };
};

//action creators
export const actFetchCourses = courses => {
  return {
    type: FETCH_COURSES,
    payload: courses,
  };
};

export const actFetchCourseType = courseType => {
  return {
    type: FETCH_COURSE_TYPE,
    payload: courseType,
  };
};

export const actAddCourse = course => {
  return {
    type: ADD_COURSE,
    payload: course,
  };
};

export const changePageCourse = pageIndex => {
  return {
    type: CHANGE_PAGE_COURSES,
    payload: pageIndex,
  };
};
