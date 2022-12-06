import * as actionType from "../Actions/actionType";

const initialState = [];

export default (state, {data, type}) => {
    state = state || initialState;

    if(type === actionType.SET_TASK_ACTION){
        let stateData = [...state, ...data];
        return stateData;
    } else{
        return state;
    }
};
