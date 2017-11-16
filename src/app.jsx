import React, {Component} from 'react'
import {render} from 'react-dom'

class App extends Component {
  state = {
    todolist: []
  }

  render () {
    return (
      <div>
        <h1>Todo List</h1>
      </div>
    )
  }
}

render(<App />, document.getElementById('main'))
