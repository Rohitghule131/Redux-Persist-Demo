import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as ActionCreator from '../../Modules/Actions';

const TaskForm = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        dispatch(ActionCreator.setTaskAction(inputValue));
        setInputValue("");
    }
    return (
        <div style={{ marginTop: "30px" }}>
            <div>
            <TextField
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                id="outlined-basic"
                label="Enter Task"
                variant="outlined"
            />
            </div>
            <div>
            <Button
                sx={{marginTop: "30px"}}
                onClick={() => {
                    handleSubmit();
                }}
                variant="contained">
                Add Task
            </Button>
            </div>
        </div>
    )
}

export default TaskForm 