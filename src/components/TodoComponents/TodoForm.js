import React from "react";

class TodoForm extends React.Component {
  constructor(){
    super()
    this.state = {
    value: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTask(event, this.state.value)
    // resets the input field so we can add other items
    this.setState({
      value: ""
    })
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default TodoForm
