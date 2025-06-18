import React, { Component } from "react";

class ChildComponent extends Component {
    render() {
      return (
        <div>
          <h2>Child Component</h2>
          <button onClick={() => this.props.updateMessage("Hello from Child!")}>
            Update Message
          </button>
        </div>
      );
    }
  }
  
  export default ChildComponent;