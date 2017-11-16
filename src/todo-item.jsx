import React from 'react'

const TodoItem = ({todo: {id, title, body, done}}) => (
  <li className={`todo icon ${done ? "done" : ""}`}>
    <p className="todo title">{title}</p>
    <p className="todo body">{body}</p>
  </li>
)

export default TodoItem
