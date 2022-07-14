import React, { Component } from "react";
import PropTypes from "prop-types";
import "./header.css";
import { nanoid } from "nanoid";

export default class Header extends Component {
  //restrictions ons props in terms of types and necessarity
  static propType = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    const { target, keyCode } = event;
    // Determine if input is Enter key
    if (keyCode !== 13) return;
    // Can't add a blank todo
    if (target.value.trim() === "") {
      alert("Can't add a blank todo");
      return;
    }

    // Create a new todo Object
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    // Empty the input bar
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Input your tasks and Press Enter"
        />
      </div>
    );
  }
}
