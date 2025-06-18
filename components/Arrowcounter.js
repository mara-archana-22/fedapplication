import React from 'react';

class Counter extends React.Component {
  state = {
    num: 0
  };

  // Arrow function automatically binds 'this'
  increment = () => {
    this.setState(prevState => ({
      num: prevState.num + 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Number: {this.state.num}</h2>
        <button onClick={this.increment}>Incbutton</button>
      </div>
    );
  }
}

export default Counter;
