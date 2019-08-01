import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import smoothScroll from "./modules/smoothScroll";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import formProcessing from "./modules/formProccessing";



window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	countTimer('19 august 20:57:30 2019');

	// menu
	toggleMenu();


	// popup
	togglePopUp();


	//	Smooth scroll
	const scrollBtn = document.querySelector('#scroll-btn');
	scrollBtn.addEventListener('click', () => {
		smoothScroll(scrollBtn.hash, 800); 
	});
	document.querySelectorAll('ul > li > a').forEach(item => {
		item.addEventListener('click', () => {
			smoothScroll(item.hash, 1000); 
		});
	});


	// Tabs
	tabs();


	// Slider
	slider();


	// Regular expressions
	const numberFields = document.querySelectorAll('.calc-item');

	numberFields.forEach((item) => {
		item.addEventListener('input', () => {
			item.value.replace(/D/gi, '');
		});
	});

	//calc
	calc();

	// Data-attributes

	const teamContainer = document.querySelector('.command');
	const teamPhotos = document.querySelectorAll('.command__photo');
	const teamPhotosPaths = [];

	teamPhotos.forEach((item) => teamPhotosPaths.push(item.src));


	teamContainer.addEventListener('mouseover', (e) => {
		let target = e.target;

		if(target.matches('.command__photo')) {
			target.src = target.getAttribute('data-img');
		} else {
			teamPhotos.forEach((item, index) => {
				item.src = teamPhotosPaths[index];
			});
		}
	});


});


// Refactor ajax form
formProcessing();
