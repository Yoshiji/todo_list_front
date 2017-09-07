import React, { Component } from 'react';

class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <TodoCard todo={todo} key={todo.id} />
        )}
      </ul>
    );
  }
}

const TodoCard = (props) => {
  return (
    <li>
      {props.todo.name}
    </li>
  )
}

export default TodosList;
