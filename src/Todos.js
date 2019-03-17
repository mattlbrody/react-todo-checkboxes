import './Todos.css';
import React from 'react';

const Todos = ({todos, scratchToDo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <input 
            type="checkbox" 
            checked={todo.checked}
            onChange={() => {scratchToDo(todo)}}
          />
          <span className={todo.checked} >{todo.content}</span>
        </div>
      )
    })
    ) : (
    <p className="center">You have no todos left</p>
    )

  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
}

export default Todos;