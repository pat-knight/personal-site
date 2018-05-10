import React, { Component } from 'react';
import './Portfolio.css';
import categories from './Categories.json';
// import portfolio from './Portfolio.json';
import Apps from './Apps/Apps';

class Portfolio extends Component {
    state = {
		type: categories,
		selected: null,
    }
	componentDidMount() {}
	showApps = (event) => {
		if (this.state.selected !== null){
			this.setState({
				selected: null
			})
		} else {
		this.setState({
			selected: event.target.name
		});
	}

	}
	render() {
		return (
			<div id="portfolio">
				<ul id="project-categories">
					{
						this.state.type.map((category, i) => {
							return <button
							key={i}
							id={category.name}
							className='category'
							name={category.name}
							onClick={this.showApps}							>
							{category.name}
							</button>
						})
					}
					
				</ul>
				<Apps 
					className='apps'
					list={this.state.selected}
					/>	
			</div>
		);
	}
}

export default Portfolio;
