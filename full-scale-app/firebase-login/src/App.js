import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authen from './Authen'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React App with Firebse Login System</h1>
        </header>
          <Authen />        
      </div>
    );
  }
}

export default App;
