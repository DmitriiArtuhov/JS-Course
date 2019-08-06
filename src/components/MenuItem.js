import React, { Component } from 'react';

class MenuItem extends Component {
	constructor(props) {
		super(props);
	}
 
	render() {
		return (
			<div className="menu__item">
				<span className="menu__item-span">{this.props.item}</span>
			</div>
		);
	}
}

export default MenuItem;