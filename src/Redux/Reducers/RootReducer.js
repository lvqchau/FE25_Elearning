import { combineReducers } from "redux";
import CourseReducer from "./CourseReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
    course: CourseReducer,
    user: UserReducer
})
export default RootReducer