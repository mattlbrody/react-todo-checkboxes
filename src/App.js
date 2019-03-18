import React, { Component } from 'react';
import Todos from './Todos';
import AddToDo from './AddToDo';

class App extends Component {
  state = {
    todos: []
  }

  // change the checked state in a particular item
  scratchToDo = (todo) => {
    // if the item is not currently checked, set the state to checked
    // which changes the class and scatches out the li's text
    if(todo.checked === '') {
      todo.checked = 'checked'
      let todos = [...this.state.todos]
      this.setState({
        todos
      })
    } else {
      // if the item is already checked, then remove the checked
      // in state which removes the class and unscratches the li
      todo.checked = ''
      let todos = [...this.state.todos]
      this.setState({
        todos
      })
    }
  }

  // add a new todo item by including it in the state
  addToDo = (todo) => {
    todo.id = Math.random();
    todo.checked = '';
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="">To Do List</h1>
        <AddToDo addToDo={this.addToDo}/>
        <Todos 
          todos={this.state.todos}
          scratchToDo={this.scratchToDo}
        />
      </div>
    );
  }
}

export default App;
