window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	function countTimer(deadline) {
		let timerHours = document.querySelector('#timer-hours'),
				timerMinutes = document.querySelector('#timer-minutes'),
				timerSeconds = document.querySelector('#timer-seconds');


		function getTimeRemaining() {
			let dateStop = new Date(deadline).getTime(),
					dateNow = new Date().getTime(),
					timeRemaining = (dateStop - dateNow) / 1000,
					seconds = Math.floor(timeRemaining % 60),
					minutes  = Math.floor((timeRemaining / 60) % 60),
					hours = Math.floor(timeRemaining / 60 / 60); 

					return {timeRemaining, hours, minutes, seconds};
		}

		let timeLeft = getTimeRemaining(),
				zeroValue = '00';

		if(timeLeft.timeRemaining <= 0) {
			timerHours.textContent = zeroValue;
			timerMinutes.textContent = zeroValue;
			timerSeconds.textContent = zeroValue;
		} else {
			function updateClock() {
				let timer = getTimeRemaining();
				if(timer.timeRemaining <= 0) {
					timerHours.textContent = zeroValue;
					timerMinutes.textContent = zeroValue;
					timerSeconds.textContent = zeroValue;
				} else {
					timer.hours < 10 ? timerHours.textContent = '0' + timer.hours : timerHours.textContent = timer.hours;

					timer.minutes < 10 ? timerMinutes.textContent = '0' + timer.minutes : timerMinutes.textContent = timer.minutes;

					timer.seconds < 10 ? timerSeconds.textContent = '0' + timer.seconds : timerSeconds.textContent = timer.seconds;
				}
				
				if(timer.timeRemaining > 0) {
					setInterval(updateClock, 1000);
				}
			}
			updateClock();
		}
		
	}

	countTimer('19 july 20:57:30 2019');


	//---  Lesson13  ---//
	// menu
	const toggleMenu = () => {

		const btnMenu = document.querySelector('.menu'),
					menu = document.querySelector('menu'),
					closeBtn = document.querySelector('.close-btn'),
					menuItems = menu.querySelectorAll('ul > li');

		const handleMenu = () => {
			menu.classList.toggle('active-menu');
		}
		
		btnMenu.addEventListener('click', handleMenu);
		closeBtn.addEventListener('click', handleMenu);

		menuItems.forEach(item => {
			item.addEventListener('click', handleMenu);
		});
	}

	toggleMenu();

	// popup

	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
					popupBtn = document.querySelectorAll('.popup-btn'),
					popupClose = document.querySelector('.popup-close');

		const fadeIn = () => {
			popup.style.transition = '0.5s';
			setTimeout(() => {
				popup.style.opacity = 1;
			}, 100);
			
		}

		const fadeOut = () => {
			popup.style.transition = '0.5s';
			popup.style.opacity = 0;
		}


		popupBtn.forEach((item) => {
			item.addEventListener('click', () => {
				if(window.innerWidth > 320) {
					popup.style.display = 'block';
					popup.style.opacity = '0';
					fadeIn();
				} else {
					popup.style.display = 'block';
				}
				
			});
		});

		popupClose.addEventListener('click', () => {
			if(window.innerWidth > 320) {
				fadeOut();
				setTimeout(() => {
					popup.style.display = 'none';
				}, 500);
			} else {
				popup.style.display = 'none';
			}
			
		});

	}

	togglePopUp();

	//	Smooth scroll
	const scrollBtn = document.querySelector('#scroll-btn');

	const smoothScroll = (target, duration) => {
		let targetElement = document.querySelector(target);
		let targetPosition = targetElement.getBoundingClientRect().top;
		let startPosition = window.pageYOffset;
		let distance = targetPosition - startPosition;
		let startTime = null;
		// Animation function
		const animation = (currentTime) => {
			if(startTime === null) {
				startTime = currentTime;
			}

			let timeElapsed = currentTime - startTime;
			let run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);

			if(timeElapsed < duration) {
				requestAnimationFrame(animation);
			}
			
		}
		// Animation type function
		const ease = (t, b, c, d) => {
			t /= d / 2;
			if(t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		}

		requestAnimationFrame(animation);
	}

	
	scrollBtn.addEventListener('click', () => {
		smoothScroll(scrollBtn.hash, 800); 
	});

	document.querySelectorAll('ul > li > a').forEach(item => {
		item.addEventListener('click', () => {
			smoothScroll(item.hash, 1000); 
		});
	});


});