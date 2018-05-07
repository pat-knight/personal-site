import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <Projects />
        <Footer />
      </div>

    );
  }
}

export default App;
