import React, { Component } from "react";
import "./App.css";
import Footer from "./component/Footer/footer";
import Header from "./component/Header/header";
import List from "./component/List/list";

class App extends Component {
  state = {
    todos: [
      { id: "01", name: "eating", done: true },
      { id: "02", name: "sleeping", done: true },
      { id: "03", name: "coding", done: false },
      { id: "04", name: "shopping", done: false },
    ],
  };

  // child component passes data to parent component
  // It is used to add a todo. Receive a todo Object
  addTodo = (todoObj) => {
    // get todos
    const { todos } = this.state;
    // add a new todo to the begin of list
    const newTodos = [todoObj, ...todos];
    // update state
    this.setState({ todos: newTodos });
  };

  // It is used to update a todo item
  updateTodo = (id, done) => {
    const { todos } = this.state;
    // Traverse todos and update its done value
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done: done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  // Delete a task
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  //check all todo tasks
  checkAll = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done };
    });
    this.setState({ todos: newTodos });
  };

  // Delete all done tasks
  removeAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />

          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAll={this.checkAll}
            removeAllDone={this.removeAllDone}
          />
        </div>
      </div>
    );
  }
}

export default App;
