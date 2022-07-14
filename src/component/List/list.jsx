import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item/item";
import "./list.css";

class List extends Component {
  //restriction ons props in terms of types and necessarity
  static propType = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  };
  render() {
    const { todos, updateTodo, deleteTodo} = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>;
        })}
      </ul>
    );
  }
}

export default List;
