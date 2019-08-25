import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./transitions.css";

export default class CSSExample extends Component {
  state = {
    contacts: ["Harry", "Ron", "Hermione", "Hagrid", "Hedwig"],
    count: 0
  };

  // increment count by 1 if count !==contacts.length, else reset count to first contact
  nextContact = () => {
    const l = this.state.contacts.length - 1;
    if (this.state.count !== l) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        currentContact: prevState.contacts[prevState.count + 1]
      }));
    } else {
      this.setState(prevState => ({
        count: 0,
        currentContact: prevState.contacts[0]
      }));
    }
    console.log(this.state);
  };

  render() {
    const { count, currentContact } = this.state;
    const styles = {
      container: {
        display: "flex",
        justifyContent: "center",
        width: "100wv",
        height: 300
      },
      btn: { width: "100%", display: "flex", justifyContent: "center" }
    };
    return (
      <div>
        <TransitionGroup style={styles.container}>
          <CSSTransition
            in={true}
            appear={false}
            key={count}
            timeout={900}
            classNames={"slide"}
          >
            <h1>{currentContact}</h1>
          </CSSTransition>
        </TransitionGroup>
        <div style={styles.btn}>
          <button onClick={this.nextContact}>next</button>
        </div>
      </div>
    );
  }
}
