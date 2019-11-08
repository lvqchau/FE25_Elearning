import {
  FETCH_CREDENTIALS,
  FETCH_USERS,
  ADD_USER,
  SIGN_UP_USER,
  FETCH_USER_INFO
} from "../Actions/ActionType";

let initialState = {
  credentials: null,
  pageIndex: 1,
  users: null,
  userInfo: null
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
    case SIGN_UP_USER:
      return { ...state };
    case FETCH_USER_INFO:
      state.userInfo = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default UserReducer;
