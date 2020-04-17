import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>prop number is {this.props.propNumber}</h3>
        <h3>prop string is {this.props.propString}</h3>
        <h3>prop object is {this.props.propObject.obj1}</h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
};

App.defaultProps = {
  propNumber: 3,
  propString: "this is prop stirng",
  propObject: {
    obj1: "i am obj1",
    obj2: "i am obj2",
    obj3: "i am obj3"
  }
};

class Parent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cars: ["s-BMW", "s-MERC", "s-AUDI", "s-City"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({cars: this.state.cars.reverse()})
  }

  render() {
    return (
      <div>
        <h1>Just some info</h1>
        <button onClick={this.handleClick}>Click</button>
        <Cars message="cars are cool" coolCars={this.state.cars} />
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ["BMW", "MERC", "AUDI"]
};

class Cars extends Component {
  render() {
    return (
      <div>
        <h3>I am from cars Component</h3>
        <p>{this.props.message}</p>
        <div>
          {this.props.coolCars.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
