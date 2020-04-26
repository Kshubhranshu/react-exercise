import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Apicall from './Apicall';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Working with reddit api using axios</h1>
        </header>
        <Apicall />

      </div>
    );  
  }
}

export default App;
