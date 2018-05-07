import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    state = {

    }
	componentDidMount() {}
	render() {
		return (
			<div id="portfolio">
				<ul className="open-games">
					{/* {this.props.gameList.map(game => (
						<li key={game.name} data-name={game.name} className="open-game" onClick={this.joinGame}>
							{game.name} - {game.status}
						</li>
					))} */}
				</ul>
			</div>
		);
	}
}

export default Portfolio;
