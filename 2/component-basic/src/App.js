import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.yourName = "ammy"
    this.state = {};
  }
  sayHello(name) {
    return "Hello " + name;
  }
  render () {
    const myName = "kumar";
    return (
      <div className="App">
         <h2>Just some sample data: {this.yourName}</h2>
         <h2>Just some sample data: {sayHello("vee")}</h2>
      </div>
    );
  }
}

export default App;
