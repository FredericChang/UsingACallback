import React, { Component } from "react";

export class SimpleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      hasButtonBeenClicked: false
    };
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={this.props.className}
        disabled={
          this.props.disabled === "true" || this.props.disabled === true
        }
      >
        {this.props.text}
        {this.state.counter}
        {this.state.hasButtonBeenClicked && <div> Button Cliked! </div>}
      </button>
    );
  }
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 }, () =>
      this.setState({ hasButtonBeenClicked: this.state.counter > 0 })
    );
    // this.setState({ counter: this.state.counter + 1 });
    // this.setState({ hasButtonBeenClicked: this.state.counter > 0 });

    this.props.callback();

    //Using the callback function ensures that the value of the hasButtonBeenClicked value
    //won’t be changed until the new counter property has been applied, ensuring that the
    //values are in sync
  };
}
