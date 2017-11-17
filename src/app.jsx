import React, {Component} from 'react'
import {render} from 'react-dom'
import TodoList from './todo-list.jsx'


class App extends Component {
  state = {
    // just a dummy test list for now
    todos: [
      {
        id: 1,
        title: "Get scholarship",
        body: "Get into Google Developer Challenge Scholarship.",
        done: true
      },
      {
        id: 2,
        title: "Make todo list app",
        body: "Make a great progressive web todo list app for the Google Developer Challenge Scholarship.",
        done: false
      }
    ]
  }



  render = () => (
    <div>
      <h1>To List</h1>
      <TodoList todos={this.state.todos} />
    </div>
  )
}

export default App;





