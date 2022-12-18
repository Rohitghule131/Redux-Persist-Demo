import { combineReducers } from "redux";
import taskData from "./taskData";

const reducer = combineReducers({
    taskList: taskData,
});


const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
