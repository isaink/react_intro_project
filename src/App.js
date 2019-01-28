import React, { Component } from 'react';
import {Home} from './components/Home'
import { Captions }from './components/Captions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header> Personal Website</header>
        <Home /> 
        <Captions />

      </div>
    );
  }
}

export default App;
