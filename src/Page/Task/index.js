import React from 'react'
import { connect } from 'react-redux';
import TaskForm from '../../Components/TaskForm';
import "./task.css"

const Task = (props) => {

  return (
    <div className='task-add-and-list-container'>
        <TaskForm/>
        <div style={{marginTop: "30px"}}>
            {props.taskList}
        </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return state.root
}

export default connect(mapStateToProps)(Task);