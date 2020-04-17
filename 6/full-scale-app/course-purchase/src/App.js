import React, { Component } from 'react';
import './App.css';
import Coursesales from './Coursesales'

class App extends Component {
  render() {
    const courses = [
      { name: 'complete ios10 dev course', price: 199 },
      { name: 'complete c course', price: 299 },
      { name: 'complete c++ dev course', price: 399 },
      { name: 'complete pythin dev course', price: 499 }
    ]

    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Welcome to Course Purchase Page
        </h2>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
