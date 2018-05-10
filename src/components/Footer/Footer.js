import React, { Component } from 'react';
import './Footer.css';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import GoMail from 'react-icons/lib/go/mail';

class Footer extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <div id='footer'>
                <h6 id='copyright'>
                    Copyright Pat Knight 2018
                </h6>
                <div id='icons'>
                    <a 
                        className='icon-link'
                        href='https://github.com/pat-knight'
                    >
                        <GoMarkGithub />
                    </a>    
                    <a 
                        className='icon-link'
                        href='https://www.linkedin.com/in/patrick-knight-8387a5144/'>
                        <FaLinkedin />
                    </a>    
                    <a 
                        className='icon-link'
                        href='#'>
                        <GoMail />
                    </a>    
                </div>
            </div>
        )
    }
};

export default Footer;
