import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Survey from './Survey'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to Programming Survey App
          </h1>
            <p>
              Where Every Feedback Matters.
            </p> 
        </header>
        <Survey />
      </div>
    );
  }
}

export default App;