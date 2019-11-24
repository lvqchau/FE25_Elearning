import { FETCH_CREDENTIALS, FETCH_USERS, ADD_USER } from "../Actions/ActionType";

let initialState = {
  credentials: null,
  pageIndex: 1,
  users: null
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
    default:
      return state;
  }
};

export default UserReducer;
