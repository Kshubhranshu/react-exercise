import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to timer App in ReactJs.
        </p>
      </header>
      <Timer start={Date.now()} />
    </div>
  );
}

export default App;
