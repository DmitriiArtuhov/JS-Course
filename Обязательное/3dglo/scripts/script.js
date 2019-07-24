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


	//---  Lesson13 - 14  ---//
	// menu
	const toggleMenu = () => {

		const btnMenu = document.querySelector('.menu'),
					menu = document.querySelector('menu'),
					closeBtn = document.querySelector('.close-btn'),
					menuItems = menu.querySelectorAll('ul > li');
	
		
		menu.addEventListener('click', (e) => {
			let target = e.target;
			target = target.closest('ul > li');

			if(target) {
				handleMenu();
			}
				
		});

		window.addEventListener('click', (e) => {
			let target = e.target;
			const imgBtn = btnMenu.querySelector('img');
			const textBtn = btnMenu.querySelector('small');

			if(target !== menu && menu.classList.contains('active-menu') && target !== imgBtn && target !== textBtn) {
				handleMenu();
			}
									
		});
		
		const handleMenu = () => {
			menu.classList.toggle('active-menu');
		}
		
		btnMenu.addEventListener('click', handleMenu);
		closeBtn.addEventListener('click', handleMenu);

	}

	toggleMenu();

	// popup

	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
					popupBtn = document.querySelectorAll('.popup-btn'),
					popupClose = document.querySelector('.popup-close');

		const fadeIn = () => {
			popup.classList.remove('modal-animation-out');
			popup.classList.add('modal-animation-in');
		}

		const fadeOut = () => {
			popup.classList.add('modal-animation-out');
			popup.classList.remove('modal-animation-in');
		}

		const popupCloseFunc = () => {
			if(window.innerWidth > 320) {
				fadeOut();
				setTimeout(() => {
					popup.style.display = 'none';
				}, 500);
			} else {
				popup.style.display = 'none';
			}
		}

		const popupOpenFunc = () => {
			if(window.innerWidth > 320) {
				popup.style.display = 'block';
				fadeIn();
			} else {
				popup.style.display = 'block';
			}
		}


		popupBtn.forEach((item) => {
			item.addEventListener('click', () => {
				popupOpenFunc();
				
			});
		});

		popupClose.addEventListener('click', () => {
			popupCloseFunc();
			
		});

		popup.addEventListener('click', (e) => {
			let target = e.target;
			target = target.closest('.popup-content');

			if(!target) {
				popupCloseFunc();
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



	//---  Lesson14  ---//
	// Tabs

	const tabs = () => {
		let tabHeader = document.querySelector('.service-header'),
				tabs = tabHeader.querySelectorAll('.service-header-tab'),
				tabContent = document.querySelectorAll('.service-tab');
		
		const toggleTabContent = (index) => {
			for(let i = 0; i < tabContent.length; i++) {
				if(index === i) {
					tabs[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tabs[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		}
		
		tabHeader.addEventListener('click', (e) => {
			let target = e.target;
			target = target.closest('.service-header-tab');
			
			if(target) {
				tabs.forEach((item , i) => {
					if(item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	}

	tabs();

	//---  Practice02  ---//
	// Slider

	const slider = () => {
		const slides = document.querySelectorAll('.portfolio-item'),
					btns = document.querySelectorAll('.portfolio-btn'),
					dotsContainer = document.querySelector('.portfolio-dots'),
					slider = document.querySelector('.portfolio-content');
		
		let interval, dots;
		let currentSlide = 0;

		const showDots = () => {
			slides.forEach(() => {
				let dot = document.createElement('li');
				dot.classList.add('dot');

				dotsContainer.appendChild(dot);
			});
			dots = document.querySelectorAll('.dot');
			dots[0].classList.add('dot-active');
		}

		const hideElem = (elems, index, className) => {
			elems[index].classList.remove(className);
		}

		const showElem = (elems, index, className) => {
			elems[index].classList.add(className);
		}

		const autoPlaySlide = () => {
			hideElem(slides, currentSlide, 'portfolio-item-active');
			hideElem(dots, currentSlide, 'dot-active');

			currentSlide++;
			if(currentSlide >= slides.length) {
				currentSlide = 0;
			}

			showElem(slides, currentSlide, 'portfolio-item-active');
			showElem(dots, currentSlide, 'dot-active');
		}

		const startSlide = (time = 1500) => {
			interval = setInterval(autoPlaySlide, time);
		}

		const stopSlide = () => {
			clearInterval(interval);
		}

		slider.addEventListener('click', (e) => {
			e.preventDefault();

			let target = e.target;

			if(!target.matches('.portfolio-btn, .dot')) return;

			hideElem(slides, currentSlide, 'portfolio-item-active');
			hideElem(dots, currentSlide, 'dot-active');

			if(target.matches('#arrow-right')) {
				currentSlide++;
			} else if(target.matches('#arrow-left')) {
				currentSlide--;
			} else if(target.matches('.dot')) {
				dots.forEach((item, index) => {
					if(item === target) {
						currentSlide = index;
					}
				});
			}

			if(currentSlide >= slides.length) currentSlide = 0;
			if(currentSlide < 0) currentSlide = slides.length - 1;

			showElem(slides, currentSlide, 'portfolio-item-active');
			showElem(dots, currentSlide, 'dot-active');


		});

		slider.addEventListener('mouseover', (e) => {
			if(e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
				stopSlide();
			}
		});

		slider.addEventListener('mouseout', (e) => {
			if(e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
				startSlide();
			}
		});

		showDots();
		startSlide(1500);
	}

	slider();


	//---  Lesson15  ---//
	// Regular expressions

	const numberFields = document.querySelectorAll('.calc-item');

	numberFields.forEach((item) => {
		item.addEventListener('input', () => {
			item.value.replace(/D/gi, '');
		});
	});


	// Data-attributes

	const teamContainer = document.querySelector('.command');
	const teamPhotosPaths = document.querySelectorAll('command__photo').src;
	const teamPhotos = document.querySelectorAll('command__photo');

	teamContainer.addEventListener('mouseover', (e) => {
		let target = e.target;

		if(target.classList.contains('command__photo')) {
			target.src = target.getAttribute('data-img');
		} else {
			teamPhotos.forEach((item, index) => {
				item.src = teamPhotosPaths[index];
				console.log('ok');
			});
		}
	});



	// Calc

	const calc = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block'),
					calcType = document.querySelector('.calc-type'),
					calcSquare = document.querySelector('.calc-square'),
					calcDay = document.querySelector('.calc-day'),
					calcCount = document.querySelector('.calc-count'),
					totalValue = document.getElementById('total');


		const animateTotal = (sum = 0) => {
			const speed = 1000 / (sum * 100);
			let i = 0;

			let animation = setInterval(() => {
				if(i <= sum) {
					totalValue.textContent = i;
				} else {
					clearInterval(animation);
				}

				i += 10;
			}, speed);
		}


		const countSum = () => {
			let total = 0,
					dayValue = 1,
					countValue = 1,
					typeValue = calcType.options[calcType.selectedIndex].value,
					squareValue = +calcSquare.value;

			if(calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if(calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if(calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}

			if(typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			}

			animateTotal(total);
		}

	
		calcBlock.addEventListener('change', (event) => {
			let target = event.target;

			if(target === calcType || target === calcSquare || target === calcDay || target === calcCount) {
				countSum();
			}
		});
	}

	calc(100);
});


