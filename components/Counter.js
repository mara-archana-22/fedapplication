import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };

    // Binding the method to 'this'
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(prevState => ({
      num: prevState.num + 1
    }));
  }

  render() {
    return (
      <div>
        <h2>Number: {this.state.num}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
