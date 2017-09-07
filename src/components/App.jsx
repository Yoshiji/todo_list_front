import React, { Component } from 'react';
import '../css/App.css';
import TodosList from './TodosList.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
		fetch('http://localhost:3001/v1/todos.json')
			.then(res => res.json())
			.then(todos => {
        this.setState({ todos: todos })
			})
			.catch(err => console.log(err));
	}
  render() {
    if(this.state.todos.length == 0) return(<div className="App">Loading...</div>)

    return (
      <div className="App">
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
