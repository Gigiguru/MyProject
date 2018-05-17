import {createStore} from "redux";
import CourseReducer from "./reducers/coursereducer";

const store = createStore(CourseReducer);

export default store;