document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// input
	const countryInput = document.querySelector('#select-cities');
	// button
	const button = document.querySelector('.button');
	// default block
	const defaultDropdown = document.querySelector('.dropdown-lists__list--default');
	const countryBlockDefault = defaultDropdown.querySelector('.dropdown-lists__col');

	// select block
	const selectDropdown = document.querySelector('.dropdown-lists__list--select');
	const countryBlockSelect = document.querySelector('.dropdown-lists__countryBlock');

	// autocomplete block
	const autocompleteDropdown = document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col');
	
	// all blocks
	const dropdowns = document.querySelectorAll('.dropdown-lists__list');


	// ------------------------------- //
	const clearDropdowns = () => {
		dropdowns.forEach((item) => {
			hideDropdown(item);
		});
	}

	const generateDropdownsContent = (language) => {
		// from file 'db_cities.js'
		data[language].forEach((country) => {
			let countryBlock = document.createElement('div');
			countryBlock.classList.add('dropdown-lists__countryBlock');

			let countryInfo = document.createElement('div');
			countryInfo.classList.add('dropdown-lists__total-line');

			let countryName = document.createElement('div');
			countryName.classList.add('dropdown-lists__country');
			countryName.textContent = country['country'];
			countryInfo.appendChild(countryName);

			let countryPopulation = document.createElement('div');
			countryPopulation.classList.add('dropdown-lists__count');
			countryPopulation.textContent = country['count'];
			countryInfo.appendChild(countryPopulation);

			countryBlock.appendChild(countryInfo);

			country['cities'].forEach((city) => {
				let cityInfo = document.createElement('div');
				cityInfo.classList.add('dropdown-lists__line');
				cityInfo.setAttribute('data-link', city['link']);

				let cityName = document.createElement('div');
				cityName.classList.add('dropdown-lists__city');
				cityName.textContent = city['name'];
				cityInfo.appendChild(cityName);

				let cityPopulation = document.createElement('div');
				cityPopulation.classList.add('dropdown-lists__count');
				cityPopulation.textContent = city['count'];
				cityInfo.appendChild(cityPopulation);

				countryBlock.appendChild(cityInfo);
			});

			countryBlockDefault.appendChild(countryBlock);
		});
	}

	const findMatchingCity = (language, val) => {		
		let matchingCities = [];
		console.clear();

		data[language].forEach((country) => {

			country['cities'].forEach((city) => {

				//console.log(city['name'].toLowerCase(), val.toLowerCase());
				if(val !== '' && city['name'].toLowerCase().indexOf(val.toLowerCase()) === 0) {
					let cityObject = {
						name: city['name'],
						population: city['count'],
						link: city['link']
					};
					matchingCities.push(cityObject);
				}

			});

		});
		console.log(matchingCities);

		return matchingCities;
	}

	const outputMatchingCities = (cities) => {
		showDropdown(dropdowns[2]);

		let countryBlock = document.createElement('div');
		countryBlock.classList.add('dropdown-lists__countryBlock');

		if(cities.length === 0) {
			countryBlock.textContent = 'Ничего не найдено';
		} else {
			cities.forEach((city) => {

			let cityInfo = document.createElement('div');
			cityInfo.classList.add('dropdown-lists__line');
			cityInfo.setAttribute('data-link', city.link);

			let cityName = document.createElement('div');
			cityName.classList.add('dropdown-lists__city');
			cityName.textContent = city.name;
			cityInfo.appendChild(cityName);

			let cityPopulation = document.createElement('div');
			cityPopulation.classList.add('dropdown-lists__count');
			cityPopulation.textContent = city.population;
			cityInfo.appendChild(cityPopulation);

			countryBlock.appendChild(cityInfo);

			});
		}
		

		autocompleteDropdown.appendChild(countryBlock);
	}

	const showDropdown = (dropdown) => {
		dropdown.style.display = 'block';
	}

	const hideDropdown = (dropdown) => {
		dropdown.style.display = 'none';
	}

	const disableButton = () => {
		//button.setAttribute('href', '#');
		button.classList.toggle('disabled');
	}

	const createBlockSelect = (block) => {
		block = block.closest('.dropdown-lists__countryBlock');
		let coutryBlockSelect = document.createElement('div');
		coutryBlockSelect.classList.add('dropdown-lists__countryBlock');

		for(let elem of block.children) {
			let elementSelect = document.createElement('div');
			elementSelect.classList.add(elem.classList[0]);
			elementSelect.setAttribute('data-link', elem.getAttribute('data-link'))
			coutryBlockSelect.appendChild(elementSelect);

			for(let child of elem.children) {
				let childElement = document.createElement('div');
				childElement.classList.add(child.classList[0]);
				childElement.textContent = child.textContent;
				elementSelect.appendChild(childElement);
			}
		}
		coutryBlockSelect.querySelector('.dropdown-lists__total-line').addEventListener('click', () => {
			clearDropdowns();
			showDropdown(defaultDropdown);
		});
		return coutryBlockSelect;
	}

	const clearBlockContent = (block) => {
		for(let elem of block.children) {
			elem.remove();
		}
	}


	// ------------------------------- //

	clearDropdowns();
	disableButton();
	generateDropdownsContent('RU');

	document.addEventListener('click', (e) => {
		if(e.target.matches('#select-cities')) {
			if(countryInput.value === '') {
				clearDropdowns();
				showDropdown(defaultDropdown);
			}
		} else if(e.target.matches('.main')) {
			clearDropdowns();
			clearBlockContent(autocompleteDropdown);
			countryInput.value = '';
		}

		if(countryInput.value !== '') countryInput.focus();

	});

	document.addEventListener('click', (e) => {
		let target = e.target.closest('.dropdown-lists__line');
		
		if(target) {
			console.log(target);
			countryInput.value = target.children[0].textContent;
			button.classList.remove('disabled');
			button.setAttribute('href', target.getAttribute('data-link'));
		}
		
		if(countryInput.value !== '') countryInput.focus();
		
	});

	button.addEventListener('click', () => {
		countryInput.value = '';
		disableButton();
	});

	defaultDropdown.addEventListener('click', (e) => {
		let target = e.target.closest('.dropdown-lists__total-line');

		if(target) {
			clearDropdowns();
			showDropdown(selectDropdown);
			clearBlockContent(selectDropdown);
			selectDropdown.appendChild(createBlockSelect(target));
		}
		
		if(countryInput.value !== '') countryInput.focus();
	});

	countryInput.addEventListener('input', (e) => {
		clearDropdowns();

		clearBlockContent(autocompleteDropdown);
		outputMatchingCities(findMatchingCity('RU', e.target.value));
		
		if(e.target.value === '') {
			clearDropdowns();
			showDropdown(defaultDropdown);
		}

	});





});
