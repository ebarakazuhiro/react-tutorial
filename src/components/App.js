import React from 'react';

import Form from './Form';
import Todo from './Todo';
import CheckAll from './checkAll';
import Filter from './Filter';
import EditTodo from './EditTodo';

let currentId = 0;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
      todos: []
    }
  }

  handleSubmit = text => {
    const newTodo = {
      id: currentId,
      text,
      compuleted: false,
      editing: false
    };
    const newTodos = [...this.state.todos, newTodo];
    this.setState({ todos: newTodos });
    currentId++;
  }

  handleChangeTodoAttribute = (id, key, value) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          [key]: value
        }
      }

      return todo;
    })

    this.setState({ todos: newTodos})
  }

  handleChangeAllCompuleted = compuleted => {
    const newTodos = this.state.todos.map(todo => {
      return {
        ...todo,
        compuleted
      }
    })

    this.setState({ todos: newTodos});
  }

  handleClickDeleteCompuleted = () => {
    const newTodos = this.state.todos.filter(({ compuleted }) => !compuleted)
    this.setState({ todos: newTodos })
  }

  handleChangeFilter = filter => {
    this.setState( { filter })
  }

  handleClickDelete = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: newTodos })
  }

  handleUpdateTodoText = (id, text) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
          editing: false
        }
      }
    })

    this.setState({ todos: newTodos })
  }

  render() {
    const { todos, filter } = this.state;
    const filterdTodos = todos.filter(({ compuleted }) => {
      switch(filter) {
        case 'all':
          return true
        case 'uncompuleted':
          return !compuleted
        case 'compuleted':
          return compuleted
        default:
          return true
      }
    })
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />

        <CheckAll allCompuleted={todos.length > 0 && todos.every(({ compuleted }) => compuleted)} onChange={this.handleChangeAllCompuleted}/>

        <Filter filter={filter} onChange={this.handleChangeFilter} />

        <ul>
          {filterdTodos.map(({ id, text, compuleted, editing }) => <li key={id}>
          {editing ? (<EditTodo id={id} text={text} onCancel={this.handleChangeTodoAttribute} onSubmit={this.handleUpdateTodoText}/>) : (<Todo id={id} text={text} compuleted={compuleted} onChange={this.handleChangeTodoAttribute} onDelete={this.handleClickDelete} />)}</li>)}
        </ul>

        <button onClick={this.handleClickDeleteCompuleted}>完了済みを全て削除</button>
      </div>
    )
  }
}

export default App