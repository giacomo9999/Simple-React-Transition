import React, { Component } from "react";
import "./App.css";
import { Transition } from "react-transition-group";

import InButton from "./InButton";
import DisplayComp from "./DisplayComp";

// const defaultStyle = { transition: "opacity 400ms ease-in-out", opacity: 0 };

// const transitionStyles = {
//   entering: { opacity: 0 },
//   entered: { opacity: 1 },
//   exiting: { opacity: 1 },
//   exited: { opacity: 0 }
// };

class App extends Component {
  state = { bool: false };

  toggle = () => {
    console.log("Toggling state...");
    this.setState(prevState => ({
      bool: !prevState.bool
    }));
  };

  render() {
    const {
      toggle,
      state: { bool }
    } = this;

    return (
      <div>
        <div className="spacer10" />
        <InButton bool={bool} toggle={toggle} />
        <DisplayComp bool={bool} toggle={toggle} />

       
      </div>
    );
  }
}

export default App;
