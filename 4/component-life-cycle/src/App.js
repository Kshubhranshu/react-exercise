import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Component Lifecycle
        </header>
        <div>
          <Body />
        </div>
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0
    };
    this.getRandomNum = this.getRandomNum.bind(this);
  }

  getRandomNum() {
    this.setState({num: Math.floor(Math.random() * 10)})
  }

  render() {
    return(
      <div className="App-intro">
        <p>this is the react testing app</p>
        <div>
          <button onClick={this.getRandomNum}>Random Number</button>
          <Numbers myNumber={this.state.num} />
        </div>
      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount() {
    console.log("coponent will mount called here");
  }

  componentDidMount() {
    console.log("component did mount here after will");
  }

  componentWillReceiveProps(newProps) {
    console.log("called");
  }
  render() {
    return(
      <div>
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
