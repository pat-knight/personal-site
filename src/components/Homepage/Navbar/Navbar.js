import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='side'>
                <a 
                href='#projects-section'
                className='page-link'>
                    <span className='strike'>
                    Projects
                    </span>
                </a>
                <a 
                href='#about-section'
                className='page-link'>
                    <span className='strike'>
                    About
                    </span>
                </a>
                <a 
                href='#contact-section'
                className='page-link'>
                    <span className='strike'>
                    Contact
                    </span>
                </a>    
            </div>
        )
    }
};

export default Navbar;
