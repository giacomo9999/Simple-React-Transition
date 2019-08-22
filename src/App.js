import React, { Component } from "react";
import "./App.css";
import { CSSTransitionGroup } from "react-transition-group";

class TodoList extends Component {
  state = { items: ["hello", "world", "click", "me"] };

  handleAdd = () => {
    const newItems = this.state.items.concat([prompt("Enter some text")]);
    this.setState({ items: newItems });
    console.log(this.state);
  };

  handleRemove = i => {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  };

  render() {
    const items = this.state.items.map((item, index) => (
      <div key={item} onClick={() => this.handleRemove(index)}>
        <h3>{item}</h3>
      </div>
    ));

    return (
      <div className="container-outer">
        <h1>I Am The App</h1>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default TodoList;
