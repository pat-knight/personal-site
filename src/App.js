import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>

    );
  }
}

export default App;
