import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SwipeableTemporaryDrawer from './components/sidebar';
import PrimarySearchAppBar from './components/appBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
       <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
      </div>
    );
  }
}

export default App;
