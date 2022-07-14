import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  //check all tasks
  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked);
  };
  // remove all selected tasks
  handleRemoveAll = () => {
    if (window.confirm("confirm to delete all selected tasks?")){
        this.props.removeAllDone();
    }
    
  };

  render() {
    const { todos } = this.props;
    //the num of tasks done
    const doneCount = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);

    // total num of tasks
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>Done {doneCount}</span> / Total {total}
        </span>
        <button
          onClick={this.handleRemoveAll}
          className="btn btn-danger"
        >
          Remove Done Tasks
        </button>
      </div>
    );
  }
}

export default Footer;
