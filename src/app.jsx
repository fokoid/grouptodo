import React, {Component} from 'react'
import {render} from 'react-dom'
import TodoList from './todo-list.jsx'


class App extends Component {
  state = {
    // just a dummy test list for now
    todos: [
      {
        title: "Get scholarship",
        body: "Get into Google Developer Challenge Scholarship.",
        tags: new Set(['web', 'development', 'pwa', 'udacity']),
        done: true
      },
      {
        title: "Make todo list app",
        body: "Make a great progressive web todo list app for the Google Developer Challenge Scholarship.",
        tags: new Set(['pwa', 'react', 'webpack', 'express']),
        done: false
      }
    ],
  }

  emptyTodo = {
    title: 'Add title',
      body: 'Add description',
      tags: new Set([]),
      done: false
  }

  createTodo = ({title, body, tags}) => {
    this.setState(({todos}) => {
      todos.push(Object.assign({}, this.emptyTodo))
      return todos
    })
  }

  removeTodo = id => {
    this.setState(({todos}) => {
      todos.splice(id, 1)
      return todos
    })
  }

  updateTodo = (id, todo) => {
    if (id < this.state.todos.length) {
      this.setState(({todos}) => {
        Object.assign(todos[id], todo)
        return todos
      })
    }
  }

  render = () => (
    <div>
      <h1>Todo List</h1>
      <TodoList
        callbacks={{
          update: this.updateTodo,
          add: this.createTodo,
          remove: this.removeTodo
        }}
        todos={this.state.todos}
        dummyTodo={this.state.dummyTodo}
      />
    </div>
  )
}

export default App
