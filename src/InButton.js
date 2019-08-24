import React, { Component } from "react";
import { Transition } from "react-transition-group";

const defaultStyle = { transition: "opacity 400ms ease-in-out", opacity: 0 };

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
};

class InButton extends Component {
  render() {
    return (
        <button onClick={this.props.toggle}>Fade Component In</button>
    //   <Transition in={!this.props.bool} timeout={400}>
    //     {status => (
    //       <div
    //         style={{
    //           ...defaultStyle,
    //           ...transitionStyles[status]
    //         }}
    //       >
    //         <button onClick={this.props.toggle}>Fade Component In</button>
    //         {console.log(status)}
    //         {console.log("Fading In.")}
    //       </div>
    //     )}
    //   </Transition>
    );
  }
}

export default InButton;
