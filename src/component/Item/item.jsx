import React, { Component } from "react";
import "./item.css";

export default class Item extends Component {
  state = { mouse: false };

  // A callback function that control mouse move in/out
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  // Check or Uncheck item in todo list
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  //Delete a todo task
  handleDelete = (id) => {
    return () => {
      if (window.confirm("confirm to delete?")) {
        this.props.deleteTodo(id);
      }
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span> {name}</span>
        </label>
        <button
          onClick={this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "flex" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
