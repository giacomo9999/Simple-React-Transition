import React, { Component } from "react";
import { Transition } from "react-transition-group";
import "./App.css";

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
    this.setState(prevState => ({ bool: !prevState.bool }));
  };

  render() {
    const {
      toggle,
      state: { bool }
    } = this;

    return (
      <div>
        <div className="spacer10" />
        <div className="container-outer">
          <button onClick={toggle}>Fade</button>
          <Transition in={bool} timeout={600}>
            {status => (
              <div style={{ ...defaultStyle, ...transitionStyles[status] }}>
                <h1>This Text Fades In And Out</h1>
                {console.log(status)}
              </div>
            )}
          </Transition>
        </div>
      </div>
    );
  }
}

export default App;
