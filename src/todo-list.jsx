import React from 'react'
import TodoItem from './todo-item.jsx'

const TodoList = ({todos}) => (
  <div className="todo list">
    <ul className="todo list">
      {todos.map(todo => (<TodoItem key={todo.id.toString()} todo={todo} />))}
    </ul>
  </div>
)

export default TodoList
