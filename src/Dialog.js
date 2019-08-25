import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Dialog extends React.Component {
  render() {
    const { isOpen, toggle, message } = this.props;
    return (
      <TransitionGroup component={null}>
        {isOpen && (
          <CSSTransition classNames="dialog" timeout={300}>
            <button onClick={toggle}>Close Dialog</button>
            <div className="dialog">{message}</div>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

export default Dialog;
