import {
  FETCH_COURSES,
  CHANGE_PAGE_COURSES,
  ADD_COURSE,
  FETCH_COURSE_TYPE,
  FETCH_USER_COURSES
} from "../Actions/ActionType";

let initialState = {
  courses: null,
  pageIndex: 1,
  courseType: [],
  userCourses: null
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      state.courses = action.payload;
      return { ...state };
    case CHANGE_PAGE_COURSES:
      state.pageIndex = action.payload;
      return { ...state };
    case FETCH_COURSE_TYPE:
      state.courseType = action.payload;
      return { ...state };
    case ADD_COURSE:
      return { ...state };
    case FETCH_USER_COURSES:
      state.userCourses = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default CourseReducer;
