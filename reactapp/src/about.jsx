import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Counter: 0, msg: "King says" };
  }

  increment = () => {
    if (this.state.Counter >= 3) {
      this.setState({ msg: "King says NOt allowed >3" });
    } else {
      this.setState({ Counter: this.state.Counter + 1, msg: "" });
    }
  };

  decrement = () => {
    if (this.state.Counter <= 0) {
      this.setState({ msg: "King says Not allowed <0" });
    } else {
      this.setState({ Counter: this.state.Counter - 1, msg: "" });
    }
  };

  render() {
    return (
      <div className='button'>
        <h1>Counter Page</h1>
        <p>Count: {this.state.Counter}</p>
        <button onClick={this.increment} className=''>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default About;