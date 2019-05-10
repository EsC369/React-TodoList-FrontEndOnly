import React, { Component } from 'react';
// import logo from './logo.svg';
import Todos from "./components/Todos";

import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Take out the trash",
                completed: false
            },
            {
                id: 2,
                title: "Dinner with wife",
                completed: true
            },
            {
                id: 3,
                title: "Meeting with boss",
                completed: false
            }
        ]
    }

  // Toggle complete:
  markComplete = (id) => {
    // console.log("id: ", id)
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  // Delete Todo Item
  delTodo = (id) => {
    // console.log(id)
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });   // Spread operator"..."  -->  need to copy everything thats there.
  }

  render() {
      // console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
