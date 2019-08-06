import React, { Component } from 'react';

import MenuItem from './MenuItem';

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="menu">
				<MenuItem item="Главная"/>
				<MenuItem item="Каталог"/>
				<MenuItem item="Услуги"/>
				<MenuItem item="Доставка"/>
				<MenuItem item="О компании"/>
				<MenuItem item="Контакты"/>
			</div>
		);
	}
}

export default Menu;