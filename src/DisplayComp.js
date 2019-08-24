import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class DisplayComp extends Component {
  render() {
    console.log(this.props);
    const { toggle, isOpen } = this.props;
    return (
      <div className="container-inner">
        <h2>I Am The Component</h2>
        <button onClick={toggle}>Toggle Display Component</button>
      </div>
    );
  }
}

export default DisplayComp;
