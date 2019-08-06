import React, { Component } from 'react';
import img from '../assets/images/logo.svg';

class Logo extends Component {
	constructor(props) {
		super(props);
	}
 
	render() {
		return (
			<div className="header__logo">

				<div className="header__logo-img">
					<img src={img} alt="logo" />
				</div>

				<div className="header__logo-text">
					<span className="header__logo-bold">{this.props.companyName}</span>
					<span className="header__logo-thin">{this.props.parag}</span>
				</div>

			</div>
		);
	}
}

export default Logo;