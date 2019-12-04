import {
  FETCH_COURSES,
  CHANGE_PAGE_COURSES,
  ADD_COURSE,
  FETCH_COURSE_TYPE,
  GET_WAITING_COURSES,
  GET_CURRENT_COURSES,
  FETCH_USER_COURSES,
  FETCH_A_COURSE
} from "../Actions/ActionType";

let initialState = {
  courses: null,
  pageIndex: 1,
  courseType: [],
  waitingCourses: [],
  currentCourses: [],
  userCourses: null,
  course: []
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      state.courses = action.payload;
      return { ...state };
    case FETCH_A_COURSE:
      state.course = action.payload;
      return { ...state };
    case CHANGE_PAGE_COURSES:
      state.pageIndex = action.payload;
      return { ...state };
    case FETCH_COURSE_TYPE:
      state.courseType = action.payload;
      return { ...state };
    case ADD_COURSE:
      return { ...state };
    case GET_WAITING_COURSES:
      state.waitingCourses = action.payload;
      return { ...state };
    case GET_CURRENT_COURSES:
      state.currentCourses = action.payload;
      return { ...state };
    case FETCH_USER_COURSES:
      state.userCourses = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default CourseReducer;
