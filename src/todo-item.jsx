import React from 'react'
import {RIEInput, RIETags, RIEToggle} from 'riek'

const TodoItem = ({
  todo: {title, body, tags, done},
  enabled = true,
  updateCallback,
  removeCallback
}) => {
  const toggle = enabled ? (
    <div className='todo toggle'>
      <RIEToggle
        value={done}
        propName='done'
        change={updateCallback}
        textTrue='&#10003;'
        textFalse='&#10005;'
      />
    </div>
  ) : (<div></div>)
  const deleteButton = enabled ? (
    <div className='todo delete'>
      <button onClick={removeCallback}>
        &#10005;
      </button>
    </div>
  ) : (<div></div>)

  return (
    <li className={`todo icon ${done ? "done" : ""}`}>
      <div className='todo title'>
        <h2>
          <RIEInput
            value={title}
            propName='title'
            change={updateCallback}
          />
        </h2>
      </div>
      {toggle}
      {deleteButton}
      <div className='todo body'>
        <RIEInput
          value={body}
          propName='body'
          change={updateCallback}
        />
      </div>
      <div className='todo tags'>
        <RIETags
          value={tags}
          propName='tags'
          change={updateCallback}
        />
      </div>
    </li>
  )
}

export default TodoItem
