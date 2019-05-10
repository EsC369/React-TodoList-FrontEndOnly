import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
// import logo from './logo.svg';


class Todos extends Component {

  render(){
    //   console.log(this.props.todos)
    return this.props.todos.map((todo) => (        // Just like a for each function:, we are iterating through the todo with map.
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ))     
  }
} 

// Prop Types:
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;

