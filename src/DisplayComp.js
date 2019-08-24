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
      <Transition in={this.props.bool} timeout={400}>
        {status => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[status]
            }}
          >
            <h2>This Text Will Fade Out</h2>
            <button onClick={this.props.toggle}>Fade Component Out</button>
            {console.log(status)}
          </div>
        )}
      </Transition>
    );
  }
}

export default DisplayComp;
