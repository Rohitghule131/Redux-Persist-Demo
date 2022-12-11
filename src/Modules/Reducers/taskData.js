import * as actionType from "../Actions/actionType";

const initialState = [];

export default (state, { data, type }) => {
    state = state || initialState;
    console.log([...state],state, data);
    if (type === actionType.SET_TASK_ACTION) {
        return data;
    } else {
        return state;
    }
};
