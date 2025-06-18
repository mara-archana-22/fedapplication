import React, { Component } from "react";
import ChildComponent from "./ChildComponent1"
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }

  updateMessage = (newMessage) => {
    this.setState({ message: newMessage });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <p>Message: {this.state.message}</p>
        <ChildComponent updateMessage={this.updateMessage} />
      </div>
    );
  }
}
export default ParentComponent;