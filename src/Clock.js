import React, { Component } from 'react';

import ShowBanner from './ShowBanner';

class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date()
		}
	}

	componentDidMount = () => {
		this.timeID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount = () => {
		clearInterval(this.timeID);
	}

	tick = () => {
		this.setState({
			date: new Date
		});
	}

	render() {
		return (
			<div>
				<ShowBanner time={ this.state.date.getSeconds() } />
				<h1>Current time <br />{ this.state.date.toLocaleTimeString() }</h1>
			</div>
		);
	}
}

export default Clock;
