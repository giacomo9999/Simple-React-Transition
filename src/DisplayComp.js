import React, { Component } from "react";
import { Transition } from "react-transition-group";

const defaultStyle = { transition: "opacity 400ms ease-in-out", opacity: 0 };

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
};

class DisplayComp extends Component {
  render() {
    return (
      <div className="container-inner">
        <h2>I Am The Component</h2>
        <button onClick={this.props.toggle}>Toggle Display Component</button>
      </div>
    );
  }
}

export default DisplayComp;
