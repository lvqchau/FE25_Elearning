import { FETCH_CREDENTIALS, FETCH_USERS, ADD_USER, GET_WAITING_STUDENTS, GET_CURRENT_STUDENTS, REGISTER_A_COURSE, DELETE_USER_FROM_COURSE } from "../Actions/ActionType";

let initialState = {
  credentials: null,
  pageIndex: 1,
  users: null,
  waitingStudents: [],
  currentStudents: []
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      state.credentials = action.payload;
      return { ...state };
    case FETCH_USERS:
      state.users = action.payload;
      return { ...state };
    case ADD_USER:
      return { ...state };
    case GET_WAITING_STUDENTS:
      state.waitingStudents = action.payload;
      return { ...state };
    case GET_CURRENT_STUDENTS:
      state.currentStudents = action.payload;
      return { ...state };
    case REGISTER_A_COURSE: //api call from QuanLyKhoaHoc
      state.currentStudents.push(action.payload);
      const index = state.waitingStudents.findIndex(item => item.taiKhoan === action.payload.taiKhoan)
      state.waitingStudents.splice(index, 1);
      return { ...state }
    case DELETE_USER_FROM_COURSE: //api call from QuanLyKhoaHoc
      const { type, value } = action.payload
      if (type === 'cur') {
        const index = state.currentStudents.findIndex(item => item.taiKhoan === value.taiKhoan)
        state.currentStudents.splice(index, 1);
      } else if (type === 'wait') {
        const index = state.waitingStudents.findIndex(item => item.taiKhoan === value.taiKhoan)
        state.waitingStudents.splice(index, 1);
      }
      return { ...state }
    default:
      return state;
  }
};

export default UserReducer;
