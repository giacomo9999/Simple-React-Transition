import React, { Component } from "react";
import "./App.css";
import { Transition } from "react-transition-group";

const defaultStyle = { transition: "opacity 400ms ease-in-out", opacity: 0 };

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
};

class App extends Component {
  state = { bool: false };

  toggle = () => {
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
        <button onClick={toggle}>Fade</button>
        <Transition in={bool} timeout={400}>
          {status => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[status]
              }}
            >
              <h2>This Text Will Fade In And Out</h2>
              {console.log(status)}
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default App;
