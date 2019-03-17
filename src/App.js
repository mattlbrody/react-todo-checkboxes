import React, { Component } from 'react';
import Todos from './Todos';
import AddToDo from './AddToDo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk', checked: ''},
      {id: 2, content: 'play mario kart', checked: 'checked'}
    ]
  }

  scratchToDo = (todo) => {
    if(todo.checked === '') {
      todo.checked = 'checked'
      let todos = [...this.state.todos]
      this.setState({
        todos
      })
    } else {
      todo.checked = ''
      let todos = [...this.state.todos]
      this.setState({
        todos
      })
    }
  }

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
      <div className="todo-app container">
        <h1 className="center blue-text">To Do List</h1>
        <Todos 
          todos={this.state.todos}
          scratchToDo={this.scratchToDo}
        />
        <AddToDo addToDo={this.addToDo}/>
        
      </div>
    );
  }
}

export default App;
