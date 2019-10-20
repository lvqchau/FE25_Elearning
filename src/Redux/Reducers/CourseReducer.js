import { FETCH_COURSES, CHANGE_PAGE_COURSES } from '../Actions/ActionType';

let initialState = {
  courses: null,
  pageIndex: 1,
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      state.courses = action.payload;
      return { ...state };
    case CHANGE_PAGE_COURSES:
      state.pageIndex = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default CourseReducer;
