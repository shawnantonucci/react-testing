import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isOn: false,
  };
  render() {
    return (
      <div className="App">
        <h1 className="display">Switch</h1>
      </div>
    );
  }
}

export default App;
