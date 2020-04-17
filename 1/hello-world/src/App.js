import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro from './Intro';

function App() {
  return (
    <div className="root">
      <Header />
      <Intro />
    </div>
  );
}

export default App;
