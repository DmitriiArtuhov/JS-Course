import React, { Component } from 'react';


class Content extends Component {
	constructor(props) {
		super(props);
	}
 
	render() {
		return (
			<div className="content">
				<h1 className="content__title">{this.props.title}</h1>
				<p className="content__parag">{this.props.parag}</p>

				<button className="content__btn">{this.props.btn}</button>
				<span className="content__or">или</span>
				<a className="content__link" href={this.props.linkURL}>{this.props.linkText}</a>
			</div>
		);
	}
}

export default Content;