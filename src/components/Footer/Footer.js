import React, { Component } from 'react';
import './Footer.css';
import GoMarkGithub from 'react-icons/lib/go/mark-github'

class Footer extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <div id='footer'>
                <h6 id='intro'>
                    Copyright Pat Knight 2018
                </h6>
                <div id='icons'>
                    <a href='https://github.com/pat-knight'>
                        <GoMarkGithub />
                    </a>    
                </div>
            </div>
        )
    }
};

export default Footer;
