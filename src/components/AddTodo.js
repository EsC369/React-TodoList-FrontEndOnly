import React, { Component } from 'react'
import PropTypes from "prop-types";

export class AddTodo extends Component {
    state= {
        title: ""
    }

    // note: usually you would have to go up to App.js component level, but ONLY in ADD, can we do component state:
    // if there were more fields such as email, password, etc... you would not want to do the on change event for each field. 
    // instead what we want is what isnt commented out below.
    // onChange =(e) => this.setState({ title: e.target.value }); // e = event paramter   // On event change, set state labeled as "title" to event targets value.

    // Set state for title. When something changes for example, when you type something into the add todo field, the title will now become populated with what was typed:
    // use the Onchange method to set the state of the change to the prop:
    // Baiscally saving the title to whatever we type in:
    onChange =(e) => this.setState({ [e.target.name] : e.target.value }); // e = event paramter   // On event change, set state labeled as "name", because the value of title text, is attached to name: to event targets value.

    onSubmit = (e) => {
        // Stop from sending to the actual file.
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: " " });  // after submitting, then the state is reset back to an empty string
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input type="text" 
                    name="title" 
                    placeholder="Add Todo..."
                    style={{ flex: "10", padding: "5px" }}
                    value={this.state.title} 
                    onChange={this.onChange}
                /> 
                <input type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: 1}}
                />
            </form>
    )
  }
}

// Prop Types:
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }

export default AddTodo
