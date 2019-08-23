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
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {/* {items} */}
        <div className="container-outer">
          <h1>I Am The App</h1>
          <button onClick={this.handleAdd}>Add Item</button>
          <h1>Fade In At Initial Mount</h1>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default TodoList;
