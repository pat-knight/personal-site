import React, { Component } from 'react';
import './Break.css';
import PropTypes from 'prop-types';
import BackgroundImage from '../Homepage/BackgroundImage/BackgroundImage';
import contact from './contact.jpg'
import portfolio from './portfolio.jpg'


class Break extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasSeen: false
        }
    }

    componentDidMount() {
        
    }
    render() {
        return (
            <section className='page-break'>
                <div 
                    className='break-image'
                    style={{
                        backgroundImage: `url(${this.props.type === 'portfolio' ? portfolio : contact})`
                    }}
                    
                >
                    <div className='break-container'>
                        <span className='break-text'>
                            {this.props.type === 'portfolio' ? 'portfolio' : 'contact'}
                        </span>
                    </div>
                </div>
            </section>
        )
    }
};

Break.propTypes = {
    type: PropTypes.string
  };

export default Break;
