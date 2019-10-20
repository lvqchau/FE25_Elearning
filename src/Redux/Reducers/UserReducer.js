import { FETCH_CREDENTIALS } from "../Actions/ActionType";

let initialState = {
  credentials: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      state.credentials = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default UserReducer;
