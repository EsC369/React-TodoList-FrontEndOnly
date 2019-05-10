import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import './App.css';
// import uuid from "uuid/v4";
import Axios from 'axios';   // Axios is used for http requests. (post, put, get, etc..) Instead of using fetch api or something of that sort, we will utilize axios for react.

class App extends Component {
    state = {
        todos: [
            // {
            //     id: uuid(),
            //     title: "Meeting with boss",
            //     completed: false
            // }
        ]
    }
    // Axios Get Request
    componentDidMount() {
      Axios.get("http://jsonplaceholder.typicode.com/todos?_limit=10")  // Query paramter to limit it to onl 10:  /?_limit=10
      // .then(res => console.log(res.data))
      .then(res => this.setState({ todos: res.data}))
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
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => 
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));   // Spread operator"..."  -->  need to copy everything thats there.
    }
    

  // Add Todo Item:
  addTodo = (title) => {   // Now that we have axios we can implement the add like this:
    Axios.post("http://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    }).then(res => { 
      this.setState({ todos: [...this.state.todos, res.data] });
    })
  }
  
    // To manually add hard coded info:
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] });


  
  render() {
      // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (   // Exact makes this route seperate from the others
              <div>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />	
              </div>  
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
