import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
	}

	buttonClick = () => {
		document.querySelector('.wrapper').style.backgroundColor = '#f9f5a6ff';
	}

	render() {
		return (
			<button className="clicker" onClick={ this.buttonClick }>Change design</button>
		);
	}
}

export default Button;
