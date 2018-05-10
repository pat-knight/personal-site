import React, { Component } from 'react';
import './Apps.css';
// import categories from './Categories.json';
import portfolio from './Portfolio.json';
import BackgroundImage from '../../../Homepage/BackgroundImage/BackgroundImage';

class Apps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apps: portfolio
        }
        
}
	componentDidMount() {}
	showApps = (event) => {
		
	}
	render() {
        if (this.props.list === null) {
            return null;
        }
		return (
			<div id="app-container">
				<ul id="app-list">
					{
						this.state.apps.map((app, i) => {
							return <div
							key={i}
							id={app.name}
							className='app-box'
                            name={app.name}
                            value={app.link}
                            onClick={this.showApps}
                            style={
                                {BackgroundImage: `url(${app.image})`}
                            }							>
							{app.name}
							</div>
						})
					}
					
				</ul>
				<ul className='apps'>
				</ul>	
			</div>
		);
	}
}

export default Apps;