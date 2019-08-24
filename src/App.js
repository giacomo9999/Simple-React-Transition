import React, { Component } from "react";
import "./App.css";
import { Transition } from "react-transition-group";
import DisplayComp from "./DisplayComp";

const defaultStyle = {
  transition: "opacity  400ms ease-in-out",
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
};

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
      <div className="container-outer">
        <button onClick={toggle}>Toggle Display Component</button>
        <Transition in={bool} timeout={400}>
          {status => (
            <div style={{ ...defaultStyle, ...transitionStyles[status] }}>
              {console.log(status)}
              <h1>I Am The Component</h1>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default App;
