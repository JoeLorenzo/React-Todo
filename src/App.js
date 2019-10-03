import React from "react";
import data from "./data";
import { Todo, TodoForm, TodoList } from "./components/TodoComponents"



class App extends React.Component {
  constructor() {
    super()
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    this.state = {
      tasks: data
    }
  }

  toggleTodo = (event, todoId) => {
    event.preventDefault()
      this.setState({
        // loops over each item in the array
        tasks: this.state.tasks.map(task => {
          if (task.id === todoId){
            return {...task, completed: !task.completed }
          }
          else {
            return task
          }
        })
      })
  }

  addTask = (event, taskItem) => {
    const newTask = {
      id: Date.now(),
      name: taskItem,
      completed: false
    }

    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Your Todo List!</h2>
           <TodoForm />
        </div>

        <div className="todo-list">
          {this.state.tasks.map(task =>
            <Todo
              key={task.id}
              todo={task}
              onClick={(e) => this.toggleTodo(e, task.id)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
