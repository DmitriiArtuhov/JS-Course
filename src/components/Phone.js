import React, { Component } from 'react';

class Phone extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="header__phone">

				<div className="header__phone-text">
					<span className="header__phone-phone">{this.props.phone}</span>
					<span className="header__phone-parag">{this.props.parag}</span>
				</div>

				<button className="header__phone-btn">{this.props.btnText}</button>

			</div>
		);
	}
}

export default Phone;