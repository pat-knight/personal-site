import React, { Component } from 'react';
import './Homepage.css';
import Navbar from './Navbar/Navbar';

class Homepage extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <div id='homepage'>
                <h2 id='intro'>
                    Simply said, I design & I code.
                </h2>
                <Navbar />
            </div>
        )
    }
};

export default Homepage;
