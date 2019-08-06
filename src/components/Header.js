import React, { Component } from 'react';

import Logo from './Logo';
import Phone from './Phone';

class Header extends Component {
	constructor(props) {
		super(props);
	}
 
	// buttonClick = () => {
	// 	document.querySelector('.wrapper').style.backgroundColor = '#f9f5a6ff';
	// }

	render() {
		return (
			<div className="header">
				<Logo companyName="granit" parag="Доставка нерудных материалов" />

				<Phone phone="8 800 342-13-33" parag="Бесплатный звонок по России" btnText="Обратный звонок" />
			</div>
		);
	}
}

export default Header;