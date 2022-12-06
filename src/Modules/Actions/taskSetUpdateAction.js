import * as actionType from "./actionType";

export const setTaskAction = (data) => ({
    type : actionType.SET_TASK_ACTION,
    data
});

export const updateTaskAction = (data) => ({
    type: actionType.UPDATE_TASK_ACTION,
    data
})