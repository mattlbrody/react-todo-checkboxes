import './Todos.css';
import React from 'react';

const Todos = ({todos, scratchToDo}) => {

  // check if the list is empty, if has items then display those items
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li className="item" key={todo.id}>
          <input 
            type="checkbox" 
            checked={todo.checked}
            onChange={() => {scratchToDo(todo)}}
          />
          <span className={todo.checked} >{todo.content}</span>
        </li>
      )
    })
    ) : (
    // if the list of items is empty display this message
    <p className="">Add a to do!</p>
    )

  return (
    <div className="">
      <ul>
        {todoList}
      </ul>
    </div>
  );
}

export default Todos;