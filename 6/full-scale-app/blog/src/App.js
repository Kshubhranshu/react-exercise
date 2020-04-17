import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Header />
      <Content />
      <Footer />
      </div>
    );
  }
}
export default App;