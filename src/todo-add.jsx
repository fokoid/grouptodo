import React from 'react'

const TodoAdd = ({callback}) => (
  <div className="todo add">
    <button onClick={callback}>&#10133;</button>
  </div>
)

export default TodoAdd
