import React, { Component } from 'react';
import './About.css';
// import Portfolio from './Portfolio/Portfolio';
// import  from './Navbar/Navbar';

class About extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <section id='about-section'>
                <h2>
                    I like to build things.
                </h2>
                <p>
                    Currently living in Chicago, I build full stack apps while tinkering around with design experiences.

                    Chances are, if I am not building something, I am cooking or outside with my girlfriend and dog. 
                </p>
                <h2>
                    Tech
                </h2>
                    {/* <table id='tech-list'>
                        <thead><thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table> */}

                    <ul id='tech-list'>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>CSS3</li>
                        <li>HTML5</li>  
                        <li>React</li>
                        <li>jQuery</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Firebase</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul> 
                <h2>
                    Education
                </h2>
                <ul>
                    <li>
                        <h3>Northwestern University Coding Bootcamp</h3>
                        <h4><em>Fullstack Web Development Program</em></h4>
                        <h4><em>May, 2018</em></h4>
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>    
                    </li>    
                    <li>
                        <h3>University of Wisconsin, Madison</h3>
                        <h4><em>Bachelor of Science, Economics</em></h4>
                        <h4><em>May, 2012</em></h4>
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>    
                    </li>    
                </ul>    
            </section>
        )
    }
};

export default About;