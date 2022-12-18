import { Collapse } from '@mui/material';
import React from 'react'
import { connect } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import TaskForm from '../../Components/TaskForm';
import "./task.css"

const Task = (props) => {
  return (
    <div className='task-add-and-list-container'>
      <TaskForm />
      <div className='task-table-container'>
      <TransitionGroup>
        {props.taskList.arr.map((item) => (
          <Collapse key={item}>
            <div style={{ marginTop: "30px" }}>
              {item}
            </div>
          </Collapse>
        ))}
      </TransitionGroup>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state.root
}

export default connect(mapStateToProps)(Task);