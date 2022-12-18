import * as actionType from "../Actions/actionType";

const initialState = {
    arr: []
};

export default (state = initialState, {data, type}) => {
    if (type === actionType.BLACK_LIST_TASK_ACTION) {
        return {
            ...state,
            arr: [...state.arr, data]
        };
    } else {
        return state;
    };
};
