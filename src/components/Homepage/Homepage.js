import React, { Component } from 'react';
import './Homepage.css';
import Navbar from './Navbar/Navbar';
import BackgroundImage from './BackgroundImage/BackgroundImage';
// const image = './BackgroundImage/background.jpg'


class Homepage extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <div id='homepage'>
                {/* <BackgroundImage imageURL={image} /> */}
                <h2 id='intro'>
                    pat knight
                </h2>
                <Navbar />
            </div>
        )
    }
};

export default Homepage;
