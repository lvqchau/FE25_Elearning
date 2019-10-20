import { FETCH_COURSES, ADD_COURSE, CHANGE_PAGE_COURSES } from './ActionType';
import { restConnector } from '../../Services/Index';
import CourseService from '../../Services/Course';
//async action fetch courses from server and save to store
export const fetchCourses = (pageIndex, itemsPerPage) => {
  return dispatch => {
    CourseService.fetchCourses(pageIndex, itemsPerPage)
      .then(res => {
        console.log(res);
        dispatch(actFetchCourses(res.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

//action creators
export const actFetchCourses = courses => {
  return {
    type: FETCH_COURSES,
    payload: courses,
  };
};

export const addCourse = course => {
  return (dispatch, getState) => {
    const { hinhAnh } = course;
    course.hinhAnh = hinhAnh.name;
    CourseService.addCourse(course)
      .then(res => {
        console.log(res);
        const formData = new FormData();
        formData.append(hinhAnh);
        CourseService.uploadImageCourse(formData)
          .then(res => {
            const { course } = getState();
            const { pageIndex } = course;
            dispatch(fetchCourses(pageIndex, 5));
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err.response));
  };
};

export const changePageCourse = pageIndex => {
  return {
    type: CHANGE_PAGE_COURSES,
    payload: pageIndex,
  };
};
