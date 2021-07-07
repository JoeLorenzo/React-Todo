import React from "react";

const Todo = props => {
  return (
    <div
    onClick={props.onClick}
    className={`task ${props.todo.completed ? " completed" : ""}`}
    >
      <p>{props.todo.taskItem}</p>
    </div>
  )
}
export default Todo
