import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    state = {

    }
	componentDidMount() {}
	render() {
		return (
			<div id="portfolio">
				<ul id="project-categories">
					<li 
						className='category'
						id='react'>
							React
					</li>
					<li 
						className='category'
						id='fullstack'>
							Fullstack
					</li>
					<li 
						className='category'
						id='node'>
							Node
					</li>
					<li 
						className='category'
						id='group-projects'>
						Group Projects
					</li>
					
				</ul>
			</div>
		);
	}
}

export default Portfolio;
