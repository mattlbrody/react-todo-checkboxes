import React, { Component } from 'react';

class AddToDo extends Component {
  state = {
    content: ''
  }

  // saves the updated input value into this.state.content
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  // when the form is submitted, intitiate addToDo from 
  // app.js with this.state and reset content to empty
  handleSubmit = (e) => {
    e.preventDefault();
    // if there is no content, return. else create the todo item
    if(this.state.content === '') {
      return
    } else {
      this.props.addToDo(this.state)
      this.setState({
        content: ''
    })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="" type="text" onChange={this.handleChange} value={this.state.content}/>
          <button className="">Add New Item</button>
        </form>
      </div>
    );
  }
}

export default AddToDo;